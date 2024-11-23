//Development CORS configuration
const cors = require("cors");

const express = require("express");
require("./db/mongoose");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
//Development Configuration with express app
app.use(cors());

//Routers
const userRouter = require('./routers/user')
const plumberRouter = require('./routers/plumber')

//Router Configurations
app.use(userRouter)
app.use(plumberRouter)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});