const UserDigitalData_Model = require('../models/UserDigitalData');


// Add user digital data
const addUserData = async (req, res) => {
    var error = false;
    res.setHeader("Content-Type", "application/json");
    const dataSend = req.body;


    UserDigitalData_Model.countDocuments({ email: dataSend.email, date: dataSend.date, year: dataSend.year, month: dataSend.month }).then((count) => {
        if (count === 0) {
            const newData = new UserDigitalData_Model(dataSend);
            newData
                .save()
                .then((data) => {
                    console.log(data, "Added");
                })
                .catch((err) => console.log(err));
        } else {
            console.log("Already Added");
        }
    })
    
}

module.exports = {
    addUserData
}