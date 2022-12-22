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
  product_code:{
    type:String,
    required:true,
  },
  weight:{
    type:String,
    required:false,
  },
  length:{
    type:String,
    required:false,
  },
  diameter:{
    type:String,
    required:false,
  },
  material:{
    type:String,
    required:false
  },
  color:{
    type:String,
    requiredd:true,
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
  },  
  img:{
    type:String,
    required:true,
  },
  createdAt:{
    type:Date,
    default:Date.now,
  }
});
const product = mongoose.model("product", productSchema);
module.exports = product;