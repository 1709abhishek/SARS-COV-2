const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const Doctor = require('../api/models/doctors');


// authentication using passport
passport.use(new LocalStrategy({
        usernameField: 'username',
        passReqToCallback: true
    },
    function(req, username, password, done){
        // find a user and establish the identity
        Doctor.findOne({username: username}, function(err, doctor)  {
            if (err){
                req.flash('error', err);
                return done(err);
            }

            if (!doctor || doctor.password != password){
                req.flash('error', 'Invalid Username/Password');
                return done(null, false);
            }

            return done(null, doctor);
        });
    }


));


// serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(doctor, done){
    done(null, doctor.id);
});



// deserializing the doctor from the key in the cookies
passport.deserializeUser(function(id, done){
    User.findById(id, function(err, doctor){
        if(err){
            console.log('Error in finding doctor --> Passport');
            return done(err);
        }

        return done(null, doctor);
    });
});


// check if the user is authenticated
passport.checkAuthentication = function(req, res, next){
    // if the user is signed in, then pass on the request to the next function(controller's action)
    if (req.isAuthenticated()){
        return next();
    }

    // if the user is not signed in
    return res.redirect('/doctors/login');
}

passport.setAuthenticatedUser = function(req, res, next){
    if (req.isAuthenticated()){
        // req.user contains the current signed in user from the session cookie and we are just sending this to the locals for the views
        res.locals.doctor = req.doctor;
    }

    next();
}



module.exports = passport;