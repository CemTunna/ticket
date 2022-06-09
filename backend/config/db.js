const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connenction = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${connenction.connection.host}`);
  } catch (error) {
    console.log(`Èrror: ${error.message}`);
    process.exit(1);
  }
};
module.exports = connectDB;
