const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  category:{
    type:String,
    required:true,
  },
  price:{
    type:Number,
    required:true,
  },
  stocks:{
    type:Number,
    required:false,
  },
  description:{
    type:String,
    required:false,
  },
  available:{
    type:Boolean,
    required:true,
    default:false,
  },
  userId:{
    type:String,
    required:true,
  }
});
const product = mongoose.model("product", productSchema);
module.exports = product;