const express = require('express');
require('dotenv').config();
const router = express.Router();

// B2C_Controllers
const customerB2Ccontroller = require('../controllers/customerCartB2C')




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

const categoryController= require('../controllers/category');

const adminProductController = require('../controllers/adminProduct');
const adminOrderedProductController = require('../controllers/adminOrderedProduct');
const CustomerController =require('../controllers/Customer');
const OwnerController =require('../controllers/Owner');


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
router.get('/getallproducts',productController.getAllProductsNoFilter);
router.get('/search',productController.getAllProductsByName);
router.get('/getallproducts/:userId',productController.getAllProducts);
router.put('/updateproduct/:proId/:userId',productController.updateProduct);
router.delete('/deleteproduct/:proId/:userId',productController.deleteProduct);

//-- Admin Product-------
router.post('/addAdminProduct',adminProductController.addAdminProduct);
router.get('/getAdminProduct/:proId/:adminId',adminProductController.getAdminProduct);
router.get('/getallAdminProducts/:adminId',adminProductController.getAllAdminProducts);
router.get('/countAdminProduct',adminProductController.countAdminProduct);
router.get('/getSearchedAdminProduct/:adminId/:search',adminProductController.getSearchedAdminProduct);
router.get('/getSearchedAdminCategoryProduct/:adminId/:search/:category',adminProductController.getSearchedAdminCategoryProduct);
router.get('/getallAdminProductsOfCategory/:adminId/:category/:name',adminProductController.getAllProdOfACategory);
router.put('/updateAdminProduct/:proId/:adminId',adminProductController.updateAdminProduct);
router.delete('/deleteAdminProduct/:proId/:adminId',adminProductController.deleteAdminProduct);

//---Category---
router.post('/addcategory',categoryController.addCategory);
router.get('/getcategory/:catId/:userId',categoryController.getCategory);
router.get('/getallcategories/:userId',categoryController.getAllCategoriesByUser);
router.get('/getallcategories',categoryController.getAllCategories);
router.put('/updatecategory/:catId/:userId',categoryController.updateCategory);
router.delete('/deletecategory/:catId/:userId',categoryController.deleteCategory);


//adminOrdered
router.post('/addAdminOrderedProduct',adminOrderedProductController.addAdminOrderedProduct);
router.get('/getAdminOrderedProduct',adminOrderedProductController.getAdminOrderedProduct);
router.get('/getCustomerOrdered/:customerEmail',adminOrderedProductController.getCustomerOrdered);
router.get('/countAdminOrder',adminOrderedProductController.countAdminOrder);


//customer 
router.post('/CustomerRegister',CustomerController.Customerregister);
router.post('/CustomerLogin',CustomerController.Customerlogin);
router.post('/updateInfo/:email',CustomerController.updateInfo);
router.post('/changePassword/:email',CustomerController.changePassword);
router.get('/getName/:email',CustomerController.getName);

//customerB2C
router.get('/cartItems/:uid', customerB2Ccontroller.getCartItems);
router.get('/prodCartStatus/:uid/:product_code', customerB2Ccontroller.productCartStatus);
router.post('/addItemToCart', customerB2Ccontroller.addCartItem);
router.delete('/removeItem/:uid/:productId', customerB2Ccontroller.removeCartItem);

//owner
router.post('/OwnerLogin',OwnerController.Ownerlogin);
router.post('/OwnerRegister',OwnerController.Ownerregister);

module.exports = router;
