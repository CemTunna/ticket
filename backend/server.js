const express = require('express');

const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  res.json({ msg: 'hi' });
});

app.listen(PORT, () => console.log(`server running on ${PORT}`));
