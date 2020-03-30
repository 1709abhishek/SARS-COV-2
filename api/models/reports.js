const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    
    doc_name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
    }
}, {
        timestamps: true
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;