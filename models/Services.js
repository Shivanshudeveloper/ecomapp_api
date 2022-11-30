const mongoose = require("mongoose");

const servicesSchema = new mongoose.Schema({
  title:{
    type: String,
    required: false
  },
  categories:{
    type: Array,
    required: false
  },
  delivery_time:{
    type: String,
    required: false
  },
  security:{
    type: Boolean,
    required: false
  },
  description:{
    type: String,
    required: false
  },
  price:{
    type: Number,
    required: false
  },
  visible:{
    type: Boolean,
    required: false
  },
  services_offers: {
    type: Array,
    required: false
  }
});
const services = mongoose.model("services", servicesSchema);
module.exports = services;
