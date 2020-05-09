const Patient = require('../../../models/patient');

// registering a patient
module.exports.register = async function (req, res) {
    try {
        var pat = await Patient.findOne({ phone: req.body.phone });
        console.log(pat);
        if (!pat) {
            var new_patient = await new Patient(req.body);
            let patient = await new_patient.save();
            return res.json(200, {
                message: "patient registered successfully",
                patient: patient
            });
        } else {
            return res.json(403, {
                message: "patient already registered",
                patient: pat
            })
        }
    }
    catch (err) {
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}