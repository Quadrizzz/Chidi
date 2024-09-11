const mongoose = require('mongoose');
const Lecturer = require('./models/New'); // Import your Lecturer model
const lecturersData = require('./arts_faculty_lecturers.json'); // Import the JSON file

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/unilag_lecturers', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
    saveLecturers(); // Call the function to save data
}).catch(err => {
    console.error('Connection error', err);
});

// Function to save lecturers from JSON to MongoDB
async function saveLecturers() {
    try {
        await Lecturer.insertMany(lecturersData);
        console.log('Lecturers have been saved successfully!');
    } catch (err) {
        console.error('Error saving lecturers:', err);
    } finally {
        mongoose.connection.close(); // Close the connection once done
    }
}
