const mongoose = require('mongoose');

//defining schema
const reportSchema = new mongoose.Schema({
    
    doc_name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
    },
    //storing patient id, a foreign key
    patient:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    }
}, {
        timestamps: true
});

//defining variable
const Report = mongoose.model('Report', reportSchema);

//exporting
module.exports = Report;