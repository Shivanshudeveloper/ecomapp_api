const mongoose = require("mongoose");

const UserDigitaldataSchema = new mongoose.Schema({
  loc: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  postal: {
    type: String,
    required: true,
  },
  timezone: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  timeMeridiem: {
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
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const UserDigitaldata = mongoose.model("userdigitaldata", UserDigitaldataSchema);

module.exports = UserDigitaldata;
