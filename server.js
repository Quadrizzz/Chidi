const express =  require('express')
const mongoose =  require('mongoose')
const lecturerRoutes = require('./routes/new')
const faculty = require('./routes/faculty')
const allRoutes = require('./routes/get')
const cors =  require("cors")
const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/unilag_lecturers', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Connection error', err);
});

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.use('/api/new', lecturerRoutes);

app.use('/api/faculty', faculty);

app.use('/api/faculty/all', faculty);

app.use('/api/staff', allRoutes);

app.use('/api/staff/:id', allRoutes);

app.use('/api/staff/delete', allRoutes);

app.use('/api/staff/update/:id', allRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});