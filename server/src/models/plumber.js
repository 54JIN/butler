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