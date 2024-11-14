const mongoose = require('mongoose');

//Docker
//"mongodb://mongodb:27017/new-docker-db"

//Local
//"mongodb://127.0.0.1/butler-manager-api"

mongoose.connect("mongodb://127.0.0.1/butler-manager-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error(err));