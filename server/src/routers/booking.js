const express = require("express");
const Booking = require("../models/booking");
const ServiceProvider = require("../models/serviceProvider");
const auth = require("../middleware/auth");
const router = express.Router();

/**
 * Create a new booking
 * POST /bookings
 */
router.post("/booking", auth, async (req, res) => {
  try {
    // Ensure the service provider exists and offers the specified service
    const { serviceProviderID, serviceType, timeSlot } = req.body

    const provider = await ServiceProvider.findById(serviceProviderID);

    if (!provider) {
      return res.status(404).send({ error: "Service provider not found." });
    }

    const match = {}
    if(serviceType) {
        match.serviceType = serviceType
    }

    const service = await provider.populate({
        path: 'service',
        match
    });

    if (!service) {
      return res.status(400).send({
        error: `Service provider does not offer ${serviceType} services.`,
      });
    }

    const booking = new Booking({
      customer: req.user._id,
      service: service._id,
      timeSlot: timeSlot,
    });

    await booking.save();
    res.status(201).send(booking);
  } catch (e) {
    res.status(500).send(e);
  }
});

/* !-- Have not code reviewed or tested via postman from below --! */

/**
 * Get all bookings for the authenticated user
 * GET /bookings
 */
router.get("/booking", auth, async (req, res) => {
  const match = {};
  const sort = {};

  // Optional filters
  if (req.query.serviceType) {
    match.serviceType = req.query.serviceType;
  }
  if (req.query.date) {
    match.date = req.query.date;
  }

  // Sorting logic
  if (req.query.sortBy) {
    const parts = req.query.sortBy.split(":");
    sort[parts[0]] = parts[1] === "desc" ? -1 : 1;
  }

  try {
    const bookings = await Booking.find({ customer: req.user._id, ...match })
      .sort(sort)
      .populate({
        path: "serviceProvider",
        select: "description areaOfService",
      });

    res.send(bookings);
  } catch (e) {
    res.status(500).send(e);
  }
});

/**
 * Update a booking (e.g., reschedule)
 * PATCH /bookings/:id
 */
router.patch("/booking/:id", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["date", "timeSlot"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const booking = await Booking.findOne({
      _id: req.params.id,
      customer: req.user._id,
    });

    if (!booking) {
      return res.status(404).send({ error: "Booking not found." });
    }

    // Ensure the new time slot is not already booked
    if (req.body.date || req.body.timeSlot) {
      const existingBooking = await Booking.findOne({
        serviceProvider: booking.serviceProvider,
        serviceType: booking.serviceType,
        date: req.body.date || booking.date,
        timeSlot: req.body.timeSlot || booking.timeSlot,
      });

      if (existingBooking) {
        return res.status(400).send({ error: "Time slot is already booked." });
      }
    }

    updates.forEach((update) => (booking[update] = req.body[update]));
    await booking.save();

    res.send(booking);
  } catch (e) {
    res.status(400).send(e);
  }
});

/**
 * Delete a booking
 * DELETE /bookings/:id
 */
router.delete("/booking/:id", auth, async (req, res) => {
  try {
    const booking = await Booking.findOneAndDelete({
      _id: req.params.id,
      customer: req.user._id,
    });

    if (!booking) {
      return res.status(404).send({ error: "Booking not found." });
    }

    res.send({ message: "Booking deleted successfully.", booking });
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
