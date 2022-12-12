const Customer = require('../models/Customer');
// import Customer from '../models/Customer';
// import express from 'express';
// import mongoose from 'mongoose';
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
Customerregister = async (req, res) => { 
    console.log(req.body)
	console.log("fjdm")
	const newPassword = await bcrypt.hash(req.body.password, 10)
	
	const newCustomer= new Customer({
		name: req.body.name,
		email: req.body.email,
		password: newPassword,
	})
	console.log(newPassword)
	try { 
		console.log(newCustomer)
		await newCustomer.save();
		res.status(201).json(Customer);
	} catch (err) {
		console.log(err.message)
		res.status(409).json({ message: err.message });
	}
}
const Customerlogin = async (req, res) => {
    const customer = await Customer.findOne({
		email: req.body.email,
	})
	
	
		if (!customer) {
			console.log("not a ")
			return res.json( { status: 'error', error: 'Invalid login' })
			console.log(res)
			
			console.log("valid ")

		}
		console.log('still here')
	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		customer.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: Customer.name,
				email: Customer.email,
			},
			'secret123'
		)
			console.log(res)
		return res.json({ status: 'ok', Customer: token })
	} else {
		console.log(res)
		
		return res.json({ status: 'error', Customer: false })
	}
}
module.exports={
    Customerlogin,
    Customerregister
}