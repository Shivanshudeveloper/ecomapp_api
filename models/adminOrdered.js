const mongoose = require("mongoose");

const adminOrderedSchema = new mongoose.Schema({
  fname:{
    type:String,
    required: true,
  },
  lname:{
    type:String,
    required: true,
  },
  email:{
    type:String,
    required: true,
  },
  
  productName:{
    type:String,
    required: true,
  },
  color:{
    type:String,
    required: true,
  },  
  cost:{
    type:Number,
    required: true,
  },
  qty:{
    type:String,
    required: true,
  }
  
});
const adminOrdered = mongoose.model("adminOrdered", adminOrderedSchema);
module.exports = adminOrdered;