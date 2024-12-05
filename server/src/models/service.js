const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  serviceProvider: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'ServiceProvider'
  },
  serviceType: {
    type: String,
    required: true,
    enum: ['Plumber', 'Electrician'] // Extendable for new services
  },
  hourlyCharge: {
    type: Number,
    required: true,
    validate(value) {
      if (value <= 0) {
        throw new Error('Cost per hour cannot be equal to or lower than zero.');
      }
    }
  },
  description: {
    type: String,
  },
  rating: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0 || value > 5) {
        throw new Error('Rating must be between 0 and 5.');
      }
    }
  },
  jobsCompleted: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Jobs completed cannot be negative.');
      }
    }
  }
}, {
  timestamps: true
});

serviceSchema.index({ serviceProvider: 1, serviceType: 1 }, { unique: true }); // Prevent duplicates

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;