const mongoose = require("mongoose");
const Product=require('./Product')
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
  BillingAddress:{
    type:String,
    required: true,
  }, 
  CompanyName:{
    type:String,
    required: true,
  }, 
  CompanyWebsite:{
    type:String,
    required: true,
  }, 
  qty:{
    type:String,
    required: true,
  },
  category:{
    type:String,
    required: true,
  }, 
description:{
  type:String,
  required: true,
}, 
diameter:{
  type:String,
  required: false,
}, 
length:{
  type:String,
  required: false,
}, 
material:{
  type:String,
  required: false,
}, 
weight:{
  type:String,
  required: false,
}, 
img:{
  type:String,
  required: true,
}, 
stocks:{
  type:String,
  required: true,
},
customerEmail:{
  type:String,
  required: true,
}
  
});
const adminOrdered = mongoose.model("adminOrdered", adminOrderedSchema);
module.exports = adminOrdered;