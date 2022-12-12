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
const addAdminOrderedProduct = async (req, res) => {
    console.log("Reached")
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
        stocks, })

    try {
        await adminOrderedProduct.save();
console.log("saved")
        res.status(201).json(adminOrderedProduct_Model );
    } catch (error) {
        console.log(error)
        res.status(409).json({ message: error.message });
    }
}
module.exports={
    getAdminOrderedProduct,
    addAdminOrderedProduct
}