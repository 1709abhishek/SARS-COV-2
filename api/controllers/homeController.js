const Patient = require('../models/patients');

module.exports.register = async function(req,res){
    try {
        var new_patient = await new Patient(req.body);
        let patient = await  new_patient.save();
        return res.json(200,{
            message: "patient registered successfully",
            patient: patient
        });
    } catch (err) {
        console.log('********',err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}