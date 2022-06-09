const express = require('express');

const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({ msg: 'hi' });
});

app.use('/users', require('./routes/user'));

app.listen(PORT, () => console.log(`server running on ${PORT}`));
