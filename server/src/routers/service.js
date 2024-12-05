const express = require("express");
const Service = require("../models/service");
const auth = require("../middleware/auth");
const router = express.Router();

/**
 * Create a new service
 * POST /services
 */
router.post("/service", auth, async (req, res) => {
  if (!req.user.serviceProviderId) {
    return res.status(401).send({ error: "User is not a serviceProvider." });
  }
  const service = new Service({
    ...req.body,
    serviceProvider: req.user.serviceProviderId, // Assuming `auth` middleware populates this
  });

  try {
    await service.save();
    res.status(201).send(service);
  } catch (e) {
    res.status(404).send(e);
  }
});

/**
 * Get a specific service by ID
 * GET /services/:id
 */
router.get("/service/:id", auth, async (req, res) => {
  if (!req.user.serviceProviderId) {
    return res.status(401).send({ error: "User is not a serviceProvider." });
  }
  try {
    const service = await Service.findOne({
      _id: req.params.id,
      serviceProvider: req.user.serviceProviderId,
    });

    if (!service) {
      return res.status(404).send();
    }

    res.send(service);
  } catch (e) {
    res.status(500).send();
  }
});

/**
 * Get all services for a provider or filter by type
 * GET /services
 */
router.get("/service", async (req, res) => {
  const match = {};
  const sort = {};

  if (req.query.serviceType) {
    match.serviceType = req.query.serviceType;
  } else {
    res.status(500).send();
  }

  if (req.query.hourlyChargeMax) {
    match.hourlyCharge = { $lte: parseInt(req.query.hourlyChargeMax) };
  }

  if (req.query.sortBy) {
    const parts = req.query.sortBy.split(":");
    sort[parts[0]] = parts[1] === "desc" ? -1 : 1;
  }

  try {
    const services = await Service.find(match)
      .limit(parseInt(req.query.limit) || 0)
      .skip(parseInt(req.query.skip) || 0)
      .sort(sort)
      .select("-createdAt -updatedAt -__v -_id -serviceType")
      .populate({
        path: "serviceProvider",
        populate: {
          path: "user",
          select: "firstName lastName -_id",
        },
        select: 'aboutMe badges'
      });

    res.send(services);
  } catch (e) {
    res.status(500).send();
  }
});

/* !-- Havent code review checked from below here --! */

/**
 * Update a specific service
 * PATCH /services/me
 */
router.patch("/service/me", auth, async (req, res) => {
  if (!req.user.serviceProviderId) {
    return res.status(401).send({ error: "User is not a serviceProvider." });
  }
  if (!req.query.serviceType) {
    res.status(500).send();
  }
  const updates = Object.keys(req.body);
  const allowedUpdates = ["description", "hourlyCharge"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const service = await Service.findOne({
      serviceProvider: req.user.serviceProviderId,
      serviceType: req.query.serviceType,
    });

    if (!service) {
      return res.status(404).send({ error: "Service not found." });
    }

    updates.forEach((update) => (service[update] = req.body[update]));
    await service.save();

    res.send(service);
  } catch (e) {
    res.status(400).send(e);
  }
});

/**
 * Delete a specific service
 * DELETE /services/:id
 */
router.delete("/service/me", auth, async (req, res) => {
  if (!req.user.serviceProviderId) {
    return res.status(401).send({ error: "User is not a serviceProvider." });
  }
  try {
    const service = await Service.findOneAndDelete({
      serviceProvider: req.user.serviceProviderId,
      serviceType: req.query.serviceType,
    });

    if (!service) {
      return res.status(404).send({ error: "Service not found." });
    }

    res.send(service);
  } catch (e) {
    res.status(500).send({ error: "Internal server error." });
  }
});

module.exports = router;
