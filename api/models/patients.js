const mongoose = require('mongoose');

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

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;