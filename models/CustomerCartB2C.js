const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    uid:{
        type: String,
        required: true
    },
    cartItems:{
        type: Object
    }
});

const customerB2C = mongoose.model("customerB2C", customerSchema);
module.exports = customerB2C