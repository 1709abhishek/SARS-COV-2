const Report = require('../../../models/report');
const Patient = require('../../../models/patient');

// creating a report for a particular patient
module.exports.create = async function (req, res) {
    try {

        var new_report = await new Report(req.body);
        new_report.patient = req.params.id
        let report = await new_report.save();
        return res.json(200, {
            message: "report created successfully",
            report: report
        });
    } catch (err) {
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}

// list all the reports for a particular patient
module.exports.showAll = async function (req, res) {
    try {
        let reports = await Report.find({ patient: req.params.id }).sort({ createdAt: 'asc' });
        return res.json(200, {
            message: "reports listed successfully",
            reports: reports
        });
    } catch (err) {
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}