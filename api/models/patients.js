const mongoose = require('mongoose');

//defining schema
const patientSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    }
}, {
        timestamps: true
});

//defining variable
const Patient = mongoose.model('Patient', patientSchema);

//exporting module
module.exports = Patient;