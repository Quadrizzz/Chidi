const mongoose = require('mongoose');

const FacultySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    departments: {
        type: [String], // An array of department names (strings)
        required: true
    }
});

module.exports = mongoose.model('Faculty', FacultySchema);