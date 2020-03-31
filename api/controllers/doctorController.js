const Doctor = require('../models/doctors');
const jwt = require('jsonwebtoken');

// doctors registering itself
module.exports.register = async function(req,res){
    try {
        var new_doctor = await new Doctor(req.body);
        let doctor = await  new_doctor.save();
        return res.json(200,{
            message: "doctor registered successfully",
            doctor: doctor
        });
    } catch (err) {
        console.log('********',err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}

//doctors login
module.exports.login = async function(req,res){
    
    try {
        let doctor = await Doctor.findOne({username: req.body.username});
        // console.log(doctor.username);
        if(!doctor){
            console.log(username);
            return res.json(422, {
                message: "Invalid username or password"
            });
        }
        if(doctor.password != req.body.password){
            // console.log(doctor.password);
            return res.json(401, {
                message: "Invalid username or password"
            });
        }
        return res.json(200, {
            message: 'Sign in successful, here is your token, keep it safe.',
            data: {
                doctor: doctor,
                token: jwt.sign(doctor.toJSON(), 'worldwillfightcorona', {expiresIn: '10000'})
            }
        })
    } catch (err) {
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}

