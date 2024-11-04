const mongoose = require('mongoose');

const facilitatorSchema = new mongoose.Schema({
    rollno: { type: String, required: true, unique: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    location: { type: String, required: true },
    userid: { type: String, required: true },
});

module.exports = mongoose.model('Facilitator', facilitatorSchema);

/*rollno
firstname
lastname
location
userid*/