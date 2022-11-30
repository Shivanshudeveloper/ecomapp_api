const Task_Model = require('../models/Task');


// Add user digital data
const addUserTask = async (req, res) => {
    var error = false;
    res.setHeader("Content-Type", "application/json");
    const dataSend = req.body;

    const newData = new Task_Model(dataSend);
        newData
            .save()
            .then((data) => {
                res.status(200).json({status: true, data});
            })
            .catch((err) => console.log(err));
    // Task_Model.countDocuments({ userId: dataSend.userId, orgId: dataSend.userId }).then((count) => {
    //     if (count === 0) {
            
    //     } else {
    //         console.log("Already Added");
    //     }
    // })
}

// Get All User Tasks
const getAllTaskUser = async (req, res) => {
    const { orgId, userId } = req.params;
    Task_Model.find({ orgId, userId }).sort({ createdAt: -1 })
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}

// Mark The Task As Complete
const completeTask = async (req, res) => {
    const { id, completed_day, completed_date,completed_month, completed_year, completed_time, completed_meredian } = req.body;
    Task_Model.updateOne({ _id: id }, { $set: {status: 'Completed', completed_day: completed_day, completed_date: completed_date,completed_month: completed_month, completed_year: completed_year, completed_time: completed_time, completed_meredian: completed_meredian } })
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}

// Mark The Task As Pending
const pendingTask = async (req, res) => {
    const { id } = req.body;
    Task_Model.updateOne({ _id: id }, { $set: {status: 'Pending', completed_day: "", completed_date: "",completed_month: "", completed_year: "", completed_time: "", completed_meredian: "" } })
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}

// Delete Task For User
const removeTask = async (req, res) => {
    const { id } = req.params;
    Task_Model.findOneAndDelete({ _id: id })
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}

// Update Organizations Invites Count
const updateTask = async (req, res) => {
    const { task, taskId } = req.body;
    Task_Model.updateOne({ _id: taskId }, { $set: { task } })
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}

module.exports = {
    addUserTask,
    getAllTaskUser,
    completeTask,
    pendingTask,
    removeTask,
    updateTask
}