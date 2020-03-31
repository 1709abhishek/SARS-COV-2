const express = require('express');
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const db = require('./config/mongoose');
const Doctor = require('./api/models/doctors');
const bodyParser = require('body-parser');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const passportJWT = require('./config/passport-jwt-strategy');


// body parser for req.body.params
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(passport.initialize());
// app.use(passport.session());

// app.use(passport.setAuthenticatedUser);

//requiring the routes
app.use('/', require('./api/routes'));

//running the express server
app.listen(port, function(err){
    if(err){
        console.log('Error in running the server: ',err);
    }
     console.log(`server is running on port: ${port}`);
});