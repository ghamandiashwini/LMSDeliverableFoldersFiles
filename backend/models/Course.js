const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseno: { type: String, required: true, unique: true },
  coursename: { type: String, required: true },
  fees: { type: String, required: true },
  courseduration: { type: String, required: true },
  mode: { type: String, required: true },
});

module.exports = mongoose.model('Course', courseSchema);