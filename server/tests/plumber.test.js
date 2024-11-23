const request = require('supertest')
const app = require('../src/app')
const Plumber = require('../src/models/plumber')
const { 
    userOneId, 
    userOne,
    userTwoId,
    userTwo,
    // plumberOne,
    // plumberTwo,
    setupDatabase
} = require('./fixtures/db')

beforeEach(setupDatabase)

test('Should create plumber for user', async () => {
    const response = await request(app)
        .post('/plumber')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            hourlyCharge: 27,
            jobsCompleted: 4,
            description: 'Hello I can help you with this.'
        })
        .expect(201)

    const plumber = await Plumber.findById(response.body._id)
    expect(plumber).not.toBeNull()
    expect(plumber.hourlyCharge).toEqual(27)
})

// test('Should fetch plumbers', async () => {
//     const response = await request(app)
//         .get('/plumber')
//         .send()
//         .expect(200)
//     expect(response.body.length).toEqual(2)
// })