const express = require('express');
const app = express();
const port = 8000;
// logic if process environment variable is not test then redirect it to development database
if (process.env.NODE_ENV !== 'test') {
    const mongoose = require('mongoose');
    const db = require('./config/mongoose');
}
const Doctor = require('./models/doctor');
const bodyParser = require('body-parser');
const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy');


// body parser for req.body.params
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//requiring the routes
app.use('/', require('./routes/api/v1'));

//running the express server
app.listen(port, function (err) {
    if (err) {
        console.log('Error in running the server: ', err);
    }
    console.log(`server is running on port: ${port}`);
});

module.exports = app;