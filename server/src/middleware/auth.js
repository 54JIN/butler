const jwt = require('jsonwebtoken')
const User = require('../models/user')
const ServiceProvider = require('../models/serviceProvider')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })

        if (!user) {
            throw new Error()
        }

        const serviceProvider = await ServiceProvider.findOne({ user: user._id })
        
        req.token = token
        req.user = user

        if(serviceProvider) {
            req.user.serviceProviderId = serviceProvider._id
        }
        next()
    } catch (e) { 
        res.status(401).send({ error: 'Please authenticate.'})
    }
}

module.exports = auth