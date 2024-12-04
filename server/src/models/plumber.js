const mongoose = require("mongoose");

const plumberSchema = new mongoose.Schema({
    hourlyCharge: {
        type: Number,
        required: true,
        validate(value) {
            if(value <= 0) {
                throw new Error('Cost per hour cannot be equal to or lower than zero.')
            }
        }
    },
    jobsCompleted: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0) {
                throw new Error('Jobs completed cannot be negative.')
            }
        }
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    rating: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0) {
                throw new Error("Rating cannot be negative.")
            }
            else if(value > 5) {
                throw new Error("Rating cannot be greater than five.")
            }
        }
    },
    areaOfService: {
        type: String,
        required: true
    },
    badges: [{
        type: String,
        enum: ['Speedy Responder', 'Top Value']
    }],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
        unique: true
    }
}, {
    timestamps: true
})

const Plumber = mongoose.model('Plumber', plumberSchema)

module.exports = Plumber;