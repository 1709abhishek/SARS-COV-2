const mongoose = require('mongoose');

//defining schema
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

//defining variable
const Doctor = mongoose.model('Doctor', doctorSchema);

//exporting module
module.exports = Doctor;