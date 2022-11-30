const mongoose = require("mongoose");

const organizationUsersSchema = new mongoose.Schema({
    company_name:{
        type:String,
        required: false,
    },
    admin_name:{
        type:String,
        required: true,
    },
    organization_id:{
        type:String,
        required: true,
    },
    organization_name:{
        type:String,
        required: true,
    },
    organization_category: {
        type: String,
        required: true,
    },
    user_email: {
        type: String,
        required: true,
    },
    user_role: {
        type: String,
        required: true,
    },
    accepted: {
        type: Number,
        required: true,
    },
    seen: {
        type: Boolean,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
const organizationUsers = mongoose.model("organizationusers", organizationUsersSchema);
module.exports = organizationUsers;
