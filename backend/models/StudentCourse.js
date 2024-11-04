const mongoose = require('mongoose');

const studentcourseSchema = new mongoose.Schema({
    rollno: { type: String, required: true, unique: true },
    courseno:{ type: String, required: true, unique: true },
});

module.exports = mongoose.model('StudentCourse', studentcourseSchema);

