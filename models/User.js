const mongoose = require("mongoose");

const Company_usersSchema = new mongoose.Schema({
  firstName:{
    type:String,
    required: false,
  },
  lastName:{
    type:String,
    required: false,
  },
  companyName:{
    type:String,
    required: false,
  },
  email:{
    type:String,
    required: false,
  },
  role:{
    type:String,
    required: false,
  },
  country:{
    type:String,
    required: false,
  },
  currency:{
    type:String,
    required: false,
  },
  bank_name:{
    type:String,
    required: false,
  },
  bank_account_number:{
    type:String,
    required: false,
  },
  ifsc_code:{
    type:String,
    required: false,
  },
  bank_full_name:{
    type:String,
    required: false,
  },
  phone_number:{
    type:String,
    required: false,
  },
  paypal_email:{
    type:String,
    required: false,
  }
});
const Company_usersData = mongoose.model("Company_users", Company_usersSchema);
module.exports = Company_usersData;
