const express = require("express");
const ServiceProvider = require("../models/serviceProvider");
const auth = require("../middleware/auth");
const router = express.Router();

/**
 * Create a new service provider profile
 * POST /serviceProviders
 */
router.post("/serviceProvider", auth, async (req, res) => {
  const serviceProvider = new ServiceProvider({
    ...req.body,
    user: req.user._id
  })

  try {
    await serviceProvider.save();
    res.status(201).send(serviceProvider);
  } catch (e) {
    res.status(404).send(e);
  }
});

/**
 * Get the service provider profile of the authenticated user
 * GET /serviceProviders/me
 */
router.get("/serviceProvider/me", auth, async (req, res) => {
  try {
    const serviceProvider = await ServiceProvider.findOne({ user: req.user._id });

    if (!serviceProvider) {
      return res.status(404).send({ error: "Service provider profile not found." });
    }

    res.send(serviceProvider);
  } catch (e) {
    res.status(500).send();
  }
});

/**
 * Update the authenticated user's service provider profile
 * PATCH /serviceProviders/me
 */
router.patch("/serviceProvider/me", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["aboutMe", "areaOfService"];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const serviceProvider = await ServiceProvider.findOne({ user: req.user._id });

    if (!serviceProvider) {
      return res.status(404).send({ error: "Service provider profile not found." });
    }

    updates.forEach((update) => (serviceProvider[update] = req.body[update]));
    await serviceProvider.save();

    res.send(serviceProvider);
  } catch (e) {
    res.status(400).send(e);
  }
});

/**
 * Delete the authenticated user's service provider profile
 * DELETE /serviceProviders/me
 */
router.delete("/serviceProvider/me", auth, async (req, res) => {
  try {
    const serviceProvider = await ServiceProvider.findOneAndDelete({ user: req.user._id });

    if (!serviceProvider) {
      return res.status(404).send({ error: "Service provider profile not found." });
    }

    res.send(serviceProvider);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;