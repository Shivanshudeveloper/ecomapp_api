const UserOrgDatalogSchema_Model = require('../models/UserOrgDatalogSchema');


// Add user organization data
const addUserOrgData = async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const dataSend = req.body;

    if (dataSend.clockInStatus === 'Clocked In') {
        UserOrgDatalogSchema_Model.countDocuments({ email: dataSend.email, clockedIndate: dataSend.date, clockedInyear: dataSend.year, clockedInmonth: dataSend.month, clockInStatus: dataSend.clockInStatus, orgId: dataSend.orgId }).then((count) => {
            if (count === 0) {
                const newData = new UserOrgDatalogSchema_Model({
                    clockedInloc: dataSend.loc,
                    clockedIncountry: dataSend.country,
                    clockedInstate: dataSend.state,
                    clockedIncity: dataSend.city,
                    clockedInpostal: dataSend.postal,
                    clockedIntimezone: dataSend.timezone,
                    clockedInday: dataSend.day,
                    clockedInmonth: dataSend.month,
                    clockedIndate: dataSend.date,
                    clockedInyear: dataSend.year,
                    clockedIntime: dataSend.time,
                    clockedIntimeMeridiem: dataSend.timeMeridiem,
                    clockInStatus: dataSend.clockInStatus,
                    clockedOutloc: '',
                    clockedOutcountry: '',
                    clockedOutstate: '',
                    clockedOutcity: '',
                    clockedOutpostal: '',
                    clockedOuttimezone: '',
                    clockedOutday: '',
                    clockedOutmonth: '',
                    clockedOutdate: '',
                    clockedOutyear: '',
                    clockedOuttime: '',
                    clockedOuttimeMeridiem: '',
                    clockOutStatus: '',
                    userId: dataSend.userId, 
                    email: dataSend.email,
                    userName: dataSend.userName,
                    orgName: dataSend.orgName,
                    orgId: dataSend.orgId,
                    os: dataSend.os
                });
                newData
                    .save()
                    .then((data) => {
                        res.status(200).json({ status: true, data: "Added" });
                    })
                    .catch((err) => console.log(err));
            } else {
                console.log("Already Added");
            }
        })
    } else if (dataSend.clockInStatus === 'Clocked Out') {
        UserOrgDatalogSchema_Model.countDocuments({ email: dataSend.email, clockedIndate: dataSend.date, clockedInyear: dataSend.year, clockedInmonth: dataSend.month, clockOutStatus: dataSend.clockInStatus, orgId: dataSend.orgId }).then((count) => {
            if (count === 0) {
                UserOrgDatalogSchema_Model.updateOne({ email: dataSend.email, clockedIndate: dataSend.date, clockedInyear: dataSend.year, clockedInmonth: dataSend.month, orgId: dataSend.orgId }, { $set: {
                    clockedOutloc: dataSend.loc,
                    clockedOutcountry: dataSend.country,
                    clockedOutstate: dataSend.state,
                    clockedOutcity: dataSend.city,
                    clockedOutpostal: dataSend.postal,
                    clockedOuttimezone: dataSend.timezone,
                    clockedOutday: dataSend.day,
                    clockedOutmonth: dataSend.month,
                    clockedOutdate: dataSend.date,
                    clockedOutyear: dataSend.year,
                    clockedOuttime: dataSend.time,
                    clockedOuttimeMeridiem: dataSend.timeMeridiem,
                    clockOutStatus: dataSend.clockInStatus,
                 }})
                    .then((data) => {
                        res.status(200).json({ status: true, data: "Updated" });
                    })
                    .catch((err) => console.log(err));
            } else {
                console.log("Already Added");
            }
        })
    }
}

// Get user daily status
const getUserDailyStatusOrg = async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const { email, date, month, year, orgId } = req.params;
    UserOrgDatalogSchema_Model.findOne({ email, clockedIndate: date, clockedInyear: year, clockedInmonth: month, orgId})
        .then((data) => {
            if (data) {
                if (data.clockOutStatus === "Clocked Out") {
                    res.status(200).json({ status: true, data: "Clocked Out" });
                } else {
                    res.status(200).json({ status: true, data: "Started Work" });
                }
            } else {
                res.status(200).json({ status: true, data: "Work Not Started" });
            }
        })
        .catch((err) => console.log(err));
}

module.exports = {
    addUserOrgData,
    getUserDailyStatusOrg
}