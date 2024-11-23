const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../../src/models/user')
const Plumber = require('../../src/models/plumber')

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name: 'Mike',
    email: 'mike@example.com',
    password: '56what!!',
    tokens: [{
        token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }]
}

const userTwoId = new mongoose.Types.ObjectId()
const userTwo = {
    _id: userTwoId,
    name: 'Jess',
    email: 'jess@example.com',
    password: 'myhouse099@@',
    tokens: [{
        token: jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET)
    }]
}

// const plumberOne = {
//     _id: new mongoose.Types.ObjectId(),
//     hourlyCharge: 27,
//     description: 'Hello I am ',
//     owner: userOne._id
// }

// const plumberTwo = {
//     _id: new mongoose.Types.ObjectId(),
//     hourlyCharge: 24,
//     description: 'Hello I am seccond',
//     owner: userTwo._id
// }

const setupDatabase = async () => {
    await User.deleteMany()
    await Plumber.deleteMany()
    await new User(userOne).save()
    await new User(userTwo).save()
    // await new Plumber(plumberOne).save()
    // await new Plumber(plumberTwo).save()
}

module.exports = {
    userOneId,
    userOne,
    userTwoId,
    userTwo,
    // plumberOne,
    // plumberTwo,
    setupDatabase
}