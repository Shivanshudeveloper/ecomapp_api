const mongoose = require("mongoose");

const userorgdatalogSchema = new mongoose.Schema({
  clockedInloc: {
    type: String,
    required: false,
  },
  clockedIncountry: {
    type: String,
    required: false,
  },
  clockedInstate: {
    type: String,
    required: false,
  },
  clockedIncity: {
    type: String,
    required: false,
  },
  clockedInpostal: {
    type: String,
    required: false,
  },
  clockedIntimezone: {
    type: String,
    required: false,
  },
  clockedInday: {
    type: String,
    required: false,
  },
  clockedInmonth: {
    type: String,
    required: false,
  },
  clockedIndate: {
    type: String,
    required: false,
  },
  clockedInyear: {
    type: String,
    required: false,
  },
  clockedIntime: {
    type: String,
    required: false,
  },
  clockedIntimeMeridiem: {
    type: String,
    required: false,
  },
  clockInStatus: {
    type: String,
    required: false,
  },
  
  clockedOutloc: {
    type: String,
    required: false,
  },
  clockedOutcountry: {
    type: String,
    required: false,
  },
  clockedOutstate: {
    type: String,
    required: false,
  },
  clockedOutcity: {
    type: String,
    required: false,
  },
  clockedOutpostal: {
    type: String,
    required: false,
  },
  clockedOuttimezone: {
    type: String,
    required: false,
  },
  clockedOutday: {
    type: String,
    required: false,
  },
  clockedOutmonth: {
    type: String,
    required: false,
  },
  clockedOutdate: {
    type: String,
    required: false,
  },
  clockedOutyear: {
    type: String,
    required: false,
  },
  clockedOuttime: {
    type: String,
    required: false,
  },
  clockedOuttimeMeridiem: {
    type: String,
    required: false,
  },
  clockOutStatus: {
    type: String,
    required: false,
  },
  userId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  orgName: {
    type: String,
    required: true,
  },
  orgId: {
    type: String,
    required: true,
  },
  os: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});
const userorgdatalog = mongoose.model("userorgdatalog", userorgdatalogSchema);
module.exports = userorgdatalog;
