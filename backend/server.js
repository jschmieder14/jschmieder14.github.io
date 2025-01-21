require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env["DB_Connection_String "], {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to database');
});

mongoose.connection.on('error', (err) => {
    console.log('Error connecting to database', err);
})