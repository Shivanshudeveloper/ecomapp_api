const UserOrgDatalogSchema_Model = require('../models/UserOrgDatalogSchema');


// Get Organization Users Data
const getOrgUsersData = async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const { date, month, year, orgId } = req.params;
    console.log(date, month, year, orgId);

    UserOrgDatalogSchema_Model.find({ clockedIndate: date, clockedInyear: year, clockedInmonth: month, orgId }).sort({ createdAt: -1 })
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
    
}

// Get Organization Reports Data
const getOrgReportData = async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const { orgId, month } = req.params;
    console.log(orgId, month);

    UserOrgDatalogSchema_Model.find({ clockedInmonth: month, orgId })
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
    
}

module.exports = {
    getOrgUsersData,
    getOrgReportData
}