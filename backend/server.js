const express = require('express');

const connectDB = require('./config/db');

require('dotenv').config();

connectDB();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/users', require('./routes/user'));

app.use('/tickets', require('./routes/ticket'));

app.listen(PORT, () => console.log(`server running on ${PORT}`));
