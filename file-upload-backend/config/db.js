const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    // eslint-disable-next-line no-console
    console.log('MongoDB connected...');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err.message);
    // Exit process wíth failure
    process.exit(1);
  }
};

module.exports = connectDB;
