const User_Model = require('../models/User');

// Add user data
const getUserData = async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const { email } = req.params;
    User_Model.findOne({ email })
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}


// Update user data
const updateUserData = async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const { 
        email,
        country,
        currency,
        bankname,
        bankaccount,
        ifsc,
        bankfullname,
        phone,
        paypal
     } = req.body;
    User_Model.updateOne({ email: email }, { $set: {country: country, currency: currency, bank_name: bankname, bank_account_number: bankaccount, ifsc_code: ifsc, bank_full_name: bankfullname, phone_number: phone, paypal_email: paypal } })
        .then((data) => {
            console.log(data);
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}


module.exports = {
    getUserData,
    updateUserData
}