const mongoose = require("mongoose");

const RequestDataSchema = new mongoose.Schema({
  fullname:{
    type:String,
    required: true,
  },
  companyname: {
    type: String,
    required: true,
  },
  workemail: {
    type: String,
    required: false,
  },
  phonenumber: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const RequestData = mongoose.model("requestdata", RequestDataSchema);
module.exports = RequestData;
