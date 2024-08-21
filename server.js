const express =  require('express')
const mongoose =  require('mongoose')
const lecturerRoutes = require('./routes/new')
const allRoutes = require('./routes/get')
const app = express()

app.use(express.json())

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

app.use('/api/lecturers', allRoutes)

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});