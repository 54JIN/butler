const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    service: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Service",
    },
    timeSlot: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          // Get the current time
          const now = new Date();

          // Ensure the date is at least an hour from now
          const oneHourFromNow = new Date(now.getTime() + 60 * 60 * 1000);

          return value >= oneHourFromNow;
        },
        message: "The date and time must be at least one hour from now.",
      },
    },
    status: {
      type: String,
      required: true,
      enum: ["Pending", "Confirmed", "Cancelled"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

// Prevent double booking for the same service at the same time
bookingSchema.index({ service: 1, timeSlot: 1 }, { unique: true });

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
