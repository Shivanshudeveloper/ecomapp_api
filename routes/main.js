const express = require('express');
require('dotenv').config();
const router = express.Router();
require('dotenv').config();

// Controllers
const checkoutController = require('../controllers/checkout');
const requestController = require('../controllers/request');








const organizationController = require('../controllers/organization');

const userdigitaldataController = require('../controllers/userdigitaldata');

const employeedataController = require('../controllers/employeedata');

const companyController = require('../controllers/company');

const taskController = require('../controllers/task');

const usersController = require('../controllers/users');

const productController= require('../controllers/product');


router.get('/test', (req, res) => {
  res.send('Working');
});

//s3 listvideos endpoint
// router.get('/listvideos/', aws_con.listVideos);


// Organization
// Adding users
router.post('/addorganizationusers', organizationController.addOrganizationUsers);
router.post('/addorganizationusersnew', organizationController.addOrganizationUsersNew);
router.get('/getorg/:email', organizationController.getallorganizationuser);
router.get('/getorgonlyadmin/:email', organizationController.getallorganizationuseradmin);


router.get('/getorginvitecount/:email', organizationController.getUserOrgInviteCount);
router.get('/getorguser/:userId', organizationController.getOrgUserDetails);
router.get('/getallinvites/:email', organizationController.getAllInvites);
router.put('/updateuserinvitecount', organizationController.updateInviteCount);
router.put('/rejectinvite', organizationController.rejectInvite);
router.put('/acceptinvite', organizationController.acceptInvite);
router.get('/getorgid/:orgId', organizationController.getOrgId);
router.get('/getonlyusersorgnotadmin/:orgId', organizationController.getOrgUsersNotAdmin);
router.delete('/removeuserdetailsorg/:orgId/:userEmail', organizationController.removeUserDetailOrg);


// User Digital Data
router.post('/adduserlocation', userdigitaldataController.addUserData);



// Employee Organization
router.post('/addemployeeorgdatalog', employeedataController.addUserOrgData);
router.get('/getuserorgdatalogstatus/:email/:date/:month/:year/:orgId', employeedataController.getUserDailyStatusOrg);


// Company Organization
router.get('/getallorgusers/:date/:month/:year/:orgId', companyController.getOrgUsersData);
router.get('/getreportorganization/:orgId/:month', companyController.getOrgReportData);

// Adding to cart i.e. checkout
router.post('/addtocheckout', checkoutController.addcheckout);
router.delete('/delallcheckouts/:uid', checkoutController.delallcheckouts);

// Adding request
router.post('/addrequest', requestController.addRequest);


// Tasks
router.post('/addusertask', taskController.addUserTask);
router.get('/getuseralltasks/:orgId/:userId', taskController.getAllTaskUser);
router.put('/marktaskcompleteuser', taskController.completeTask);
router.put('/marktaskpendinguser', taskController.pendingTask);
router.delete('/deletetaskforuser/:id', taskController.removeTask);
router.put('/updatetaskforuser', taskController.updateTask);



// Users
router.get('/getuserdata/:email', usersController.getUserData);
router.put('/updateuser', usersController.updateUserData);


//-- Product-------
router.post('/addproduct',productController.addProduct);
router.get('/getproduct/:proId/:userId',productController.getProduct);
router.get('/getallproducts/:userId',productController.getAllProducts);
router.put('/updateproduct/:proId/:userId',productController.updateProduct);
router.delete('/deleteproduct/:proId/:userId',productController.deleteProduct);

module.exports = router;
