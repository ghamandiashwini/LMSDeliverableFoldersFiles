const mongoose = require('mongoose');

const facilitatorcourseSchema = new mongoose.Schema({
    rollno: { type: String, required: true,  },
    courseno:{ type: String, required: true,  },
});

module.exports = mongoose.model('FacilitatorCourse', facilitatorcourseSchema);

