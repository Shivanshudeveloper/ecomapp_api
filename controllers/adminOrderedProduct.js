const adminOrderedProduct_Model = require('../models/adminOrdered');
// import express from 'express';
// import mongoose from 'mongoose';

const getAdminOrderedProduct = async (req, res) => { 
    try {
        const adminOrderedProduct = await adminOrderedProduct_Model.find();
                
        res.status(200).json(adminOrderedProduct);
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: error.message });
    }
}
const countAdminOrder=async(req,res)=>{
    try {
   const c=await     adminOrderedProduct_Model.countDocuments({})
            // console.log(c)
        res.status(200).json(c);
           
      
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: error.message });
    }
   
}
const addAdminOrderedProduct = async (req, res) => {
    // console.log(req.body)
    const { fname,
        lname,
        email,
        productName,
        color,
        cost,
        BillingAddress,
        CompanyName,
        CompanyWebsite,
        qty,
        category,
description,
diameter,
length,
material,
weight,
stocks,
img, 
customerEmail
    } = req.body;

    const adminOrderedProduct = new adminOrderedProduct_Model({ fname,
        lname,
        email,
        productName,
        color,
        cost,
        BillingAddress,
        CompanyName,
        CompanyWebsite,
        qty,
        category,
        description,
        diameter,
        length,
        material,
        weight,
        stocks,
        img, 
        customerEmail })

    try {
        await adminOrderedProduct.save();
// console.log("saved")
console.log(adminOrderedProduct_Model)
        res.status(201).json(adminOrderedProduct_Model );
    } catch (error) {
        console.log(error)
        res.status(409).json({ message: error.message });
    }
}
const getCustomerOrdered = async (req, res) => {
    try {
        console.log(req.params.customerEmail)
        const adminOrderedProduct = await adminOrderedProduct_Model.find({
            customerEmail:req.params.customerEmail
        });
                
        res.status(200).json(adminOrderedProduct);
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: error.message });
    }   
}

module.exports={
    getAdminOrderedProduct,
    addAdminOrderedProduct,
    countAdminOrder,
    getCustomerOrdered
}