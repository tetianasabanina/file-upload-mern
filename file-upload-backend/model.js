/* eslint-disable linebreak-style */
const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  meta_data: {},
});

mongoose.model('file', fileSchema);
