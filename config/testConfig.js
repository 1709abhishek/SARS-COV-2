const mongoose = require('mongoose');


// mongoose instance connection url connection
mongoose.connect('mongodb://localhost/SARS-COV-2-testing');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to mongoose'));

db.once('open', function () {
    console.log('Connected to database mongoDB');
});

module.exports = db;