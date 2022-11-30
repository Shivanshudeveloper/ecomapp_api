const { v4: uuidv4 } = require('uuid');

// Utils
const { sendEmailUserInvite } = require('./mail');

// Models
const Organization_Users_Model = require('../models/Organization_Users');


// Add organization users
const addOrganizationUsers = async (req, res) => {
    var error = false;
    res.setHeader("Content-Type", "application/json");
    const submitrequest = req.body;

    var organization_id = String(`${Date.now()}_${uuidv4()}`);
    

    (submitrequest.invites).map((invite) => {
        try {
            Organization_Users_Model.countDocuments({ organization_name: submitrequest.organization_name, user_email: invite.email }).then((count) => {
                if (count === 0) {
                    var data;
                    if ( invite.role === 'Admin' ) {
                        data = {
                            company_name: submitrequest.company_name,
                            admin_name: submitrequest.admin_name,
                            organization_id,
                            organization_name: submitrequest.organization_name,
                            organization_category: submitrequest.organization_category,
                            user_email: invite.email,
                            user_role: invite.role,
                            accepted: 1,
                            seen: true
                        }
                    } else if ( invite.role === 'Project Manager' ) {
                        sendEmailUserInvite(invite.email, invite.role, submitrequest.organization_name);
                        data = {
                            company_name: submitrequest.company_name,
                            admin_name: submitrequest.admin_name,
                            organization_id,
                            organization_name: submitrequest.organization_name,
                            organization_category: submitrequest.organization_category,
                            user_email: invite.email,
                            user_role: invite.role,
                            accepted: 0,
                            seen: false
                        }
                    } else {
                        sendEmailUserInvite(invite.email, invite.role, submitrequest.organization_name);
                        data = {
                            company_name: submitrequest.company_name,
                            admin_name: submitrequest.admin_name,
                            organization_id,
                            organization_name: submitrequest.organization_name,
                            organization_category: submitrequest.organization_category,
                            user_email: invite.email,
                            user_role: invite.role,
                            accepted: 0,
                            seen: false
                        }
                    }
                    const newData = new Organization_Users_Model(data);
                    newData
                        .save()
                        .then((data) => {
                            console.log(data, "Added");
                        })
                        .catch((err) => console.log(err));
                } else {
                    console.log(invite.email, "Already Added");
                    // res.status(201).json("Already Added");
                }
            });
        } catch (err) {
            console.log(err);
            error = true;
        }
    })
    
    setTimeout(() => {
        console.log(error);
        if (error) {
            res.status(500).json({ status: "Server Error" });
        } else {
            res.status(200).json({ status: "Added", id: organization_id });
        }
    }, 4000);
}



// Add organization users
const addOrganizationUsersNew = async (req, res) => {
    var error = false;
    var userId = '';
    res.setHeader("Content-Type", "application/json");
    const submitrequest = req.body;
   
    (submitrequest.invites).map((invite) => {
        try {
            Organization_Users_Model.countDocuments({ organization_name: submitrequest.organization_name, user_email: invite.email }).then((count) => {
                if (count === 0) {
                    var data;
                    if ( invite.role === 'Project Manager' ) {
                        data = {
                            company_name: submitrequest.company_name,
                            admin_name: submitrequest.admin_name,
                            organization_id: submitrequest.orgId,
                            organization_name: submitrequest.organization_name,
                            organization_category: submitrequest.organization_category,
                            user_email: invite.email,
                            user_role: invite.role,
                            accepted: 0,
                            seen: true
                        }
                    } else {
                        data = {
                            company_name: submitrequest.company_name,
                            admin_name: submitrequest.admin_name,
                            organization_id: submitrequest.orgId,
                            organization_name: submitrequest.organization_name,
                            organization_category: submitrequest.organization_category,
                            user_email: invite.email,
                            user_role: invite.role,
                            accepted: 0,
                            seen: false
                        }
                    }
                    sendEmailUserInvite(invite.email, invite.role, submitrequest.organization_name);
                    const newData = new Organization_Users_Model(data);
                    newData
                        .save()
                        .then((data) => {
                            console.log(data, "Added");
                            userId = data?._id;
                        })
                        .catch((err) => console.log(err));
                } else {
                    console.log(invite.email, "Already Added");
                }
            });
        } catch (err) {
            console.log(err);
            error = true;
        }
    })
    
    setTimeout(() => {
        console.log(error);
        if (error) {
            res.status(500).json({ status: "Server Error" });
        } else {
            res.status(200).json({ status: "Added", id: submitrequest.orgId, userId });
        }
    }, 2000);
}


// Get Organizations
const getallorganizationuser = async (req, res) => {
    const { email } = req.params;
    Organization_Users_Model.find({ user_email: email, accepted: 1 }).sort({ createdAt: -1 })
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}


// Get Organizations Invites Count
const getUserOrgInviteCount = async (req, res) => {
    const { email } = req.params;
    Organization_Users_Model.countDocuments({ user_email: email, seen: false })
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}

// Update Organizations Invites Count
const updateInviteCount = async (req, res) => {
    const { email } = req.body;
    Organization_Users_Model.updateMany({ user_email: email, seen: false }, { $set: {seen: true } })
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}

// Get Organizations Invites Count
const getAllInvites = async (req, res) => {
    const { email } = req.params;
    Organization_Users_Model.find({ user_email: email, accepted: 0 }).sort({ createdAt: -1 })
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}

// Update Organizations Invites Count
const rejectInvite = async (req, res) => {
    const { id } = req.body;
    Organization_Users_Model.updateOne({ _id: id }, { $set: {accepted: 2 } })
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}

// Update Organizations Invites Count
const acceptInvite = async (req, res) => {
    const { id } = req.body;
    Organization_Users_Model.updateOne({ _id: id }, { $set: {accepted: 1 } })
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}

// Get organization by id
const getOrgId = async (req, res) => {
    const { orgId } = req.params;
    Organization_Users_Model.findOne({ organization_id: orgId })
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}



// Only get the users of the organization not admin
const getOrgUsersNotAdmin = async (req, res) => {
    const { orgId } = req.params;
    Organization_Users_Model.find({ organization_id: orgId, user_role: { $ne: 'Admin' } })
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}

// Only get the users of the organization not admin
const removeUserDetailOrg = async (req, res) => {
    const { orgId, userEmail } = req.params;
    Organization_Users_Model.findOneAndDelete({ organization_id: orgId, user_email: userEmail })
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}


// Get Organizations Data Admin
const getallorganizationuseradmin = async (req, res) => {
    const { email } = req.params;
    Organization_Users_Model.find({ user_email: email, user_role: 'Admin' }).sort({ createdAt: -1 })
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}


// Get Organizations Data Admin
const getOrgUserDetails = async (req, res) => {
    const { userId } = req.params;
    Organization_Users_Model.findOne({ _id: userId }).sort({ createdAt: -1 })
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}



module.exports = {
    addOrganizationUsers,
    getallorganizationuser,
    getUserOrgInviteCount,
    getAllInvites,
    updateInviteCount,
    rejectInvite,
    acceptInvite,
    getOrgId,
    getOrgUsersNotAdmin,
    removeUserDetailOrg,
    addOrganizationUsersNew,
    getallorganizationuseradmin,
    getOrgUserDetails
}