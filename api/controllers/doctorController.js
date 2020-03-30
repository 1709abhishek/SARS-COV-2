const Doctor = require('../models/doctors');
const jwt = require('jsonwebtoken');
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

module.exports.login = function(req,res){
    
    try {
        let doctor = Doctor.findOne({username: req.body.username});

        if(!doctor || doctor.password != doctor.body.password){
            return res.json(422, {
                message: "Invalid username or password"
            });
        }
        return res.json(200, {
            message: 'Sign in successful, here is your token, keep it safe.',
            data: {
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
