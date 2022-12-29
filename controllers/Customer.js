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
		fname: req.body.fname,
		lname: req.body.lname,
		email: req.body.email,
		password: newPassword,
	})
	console.log(newPassword)
	try { 
		// console.log(newCustomer)
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
			// console.log(res)
			
			// console.log("valid ")

		}
		console.log('still here')
	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		customer.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				fname: Customer.fname,
				email: Customer.email,
			},
			'secret123'
		)
			// console.log(res)
		return res.json({ status: 'ok', Customer: token })
	} else {
		console.log(res)
		
		return res.json({ status: 'error', Customer: false })
	}
}
const getName = async( req ,res)=>{
	console.log("reached")
	Customer.findOne({
		email: req.params.email,
	}).then((p)=>{
		// console.log(p)
		return res.status(200).json(p)})
	.catch((error) =>{
// console.log(error)
	return	res.status(400).json(error)});
	
	
}
const updateInfo =async(req,res)=>{
	console.log("updating")
	console.log(req.body)
	Customer.findOneAndUpdate({email:req.params.email } ,{
	
		fname:req.body.fname,
		lname:req.body.lname,
		email:req.body.email,
		phone:req.body.phone,
		country:req.body.country,
		state:req.body.state,
		company:req.body.company
		
	}, null, function (err, docs) {
		if (err){
			console.log(err)
		}
		else{
			console.log("successful");
		}
	})
}
const changePassword = async (req, res) => {
   
	const customer = await Customer.findOne({
		email: req.params.email,
	})

	
	const isPasswordValid = await bcrypt.compare(
		req.body.opass,
		customer.password
	)

	if (isPasswordValid) {
		// console.log(npassword)
		const newPassword = await bcrypt.hash(req.body.npassword, 10)
		Customer.findOneAndUpdate({email:req.params.email } ,{
	
			password:newPassword
			
		}, null, function (err, docs){
			if (err){
				return res.send(err)
			}
			else{
				return res.send("successful");
			}
		})
	
	}
	else{
		return res.send("INVALID OLD PASSWORD")
	}
}
module.exports={
    Customerlogin,
    Customerregister, 
	getName,
	updateInfo,
	changePassword
}