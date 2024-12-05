//Development CORS configuration
const cors = require("cors");

const express = require("express");
require("./db/mongoose");

const app = express();

app.use(express.json());
//Development Configuration with express app
app.use(cors());

//Routers
const userRouter = require('./routers/user')
const serviceRouter = require('./routers/service')
const serviceProviderRouter = require('./routers/serviceProvider')
const bookingRouter = require('./routers/booking')

//Router Configurations
app.use(userRouter)
app.use(serviceRouter)
app.use(serviceProviderRouter)
app.use(bookingRouter)

module.exports = app