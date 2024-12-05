const mongoose = require('mongoose');

const serviceProviderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
    unique: true
  },
  aboutMe: {
    type: String,
    required: true,
    trim: true
  },
  areaOfService: {
    type: String,
    required: true
  },
  badges: [{
    type: String,
    enum: ['Speedy Responder', 'Top Value']
  }]
}, {
  timestamps: true
});

serviceProviderSchema.virtual('service', {
  ref: 'Service',
  localField: '_id',
  foreignField: 'serviceProvider'
});

/* !-- Complete Task --! */

//If the service provider is deleted, then all services they provide should be deleted as well.

/* !-- End Of Task --! */

const ServiceProvider = mongoose.model('ServiceProvider', serviceProviderSchema);

module.exports = ServiceProvider;