const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    task:{
        type:String,
        required: true,
    },
    userId:{
        type:String,
        required: true,
    },
    orgId:{
        type:String,
        required: true,
    },
    day:{
        type:String,
        required: true,
    },
    date:{
        type:String,
        required: true,
    },
    month:{
        type:String,
        required: true,
    },
    year:{
        type:String,
        required: true,
    },
    time:{
        type:String,
        required: true,
    },
    meredian:{
        type:String,
        required: true,
    },
    status:{
        type:String,
        required: true,
    },
    completed_day:{
        type:String,
        required: false,
    },
    completed_date:{
        type:String,
        required: false,
    },
    completed_month:{
        type:String,
        required: false,
    },
    completed_year:{
        type:String,
        required: false,
    },
    completed_time:{
        type:String,
        required: false,
    },
    completed_meredian:{
        type:String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
const Tasks = mongoose.model("tasks", TaskSchema);
module.exports = Tasks;
