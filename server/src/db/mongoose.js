const mongoose = require('mongoose');

mongoose.connect("mongodb://mongodb:27017/new-docker-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error(err));