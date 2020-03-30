const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    }
}, {
        timestamps: true
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;