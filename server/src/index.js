const express = require('express');
require('./db/mongoose')

const User = require('./models/user')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.status(201).send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});