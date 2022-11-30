const mongoose = require("mongoose");

const checkoutSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: false,
  },
  product:{
    type: Object,
    required: false
  },
  productId: {
    type: String,
    required: false    
  },
  CreatedAt: {
    type: Date,
    default: Date.now
  }
});
const checkout = mongoose.model("checkout", checkoutSchema);
module.exports = checkout;
