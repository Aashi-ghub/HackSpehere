const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4
    });
    console.log(`Connected successfully to MongoDB: ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error in connection: ${err.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;