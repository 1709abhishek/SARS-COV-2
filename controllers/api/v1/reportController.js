var Report = require('../../../models/reports');

module.exports.showStatus = async function (req, res) {
    var report = await Report.find({ status: req.params.status });
    return res.json(200, {
        message: "reports fetched successfully",
        reports: report
    })
}