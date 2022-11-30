
// Models
const Request_Model = require('../models/Request');

const addRequest = async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const submitrequest = req.body;
    const newData = new Request_Model(submitrequest);
      newData
        .save()
        .then((data) => {
            res.status(200).json("Added");
        })
        .catch((err) => console.log(err));
}

module.exports = {
    addRequest,
}