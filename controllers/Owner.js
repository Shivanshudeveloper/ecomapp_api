const Owner = require('../models/owner');
// import Owner from '../models/Owner';
// import express from 'express';
// import mongoose from 'mongoose';
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
Ownerregister = async (req, res) => { 
    console.log(req.body)
	console.log("fjdm")
	const newPassword = await bcrypt.hash(req.body.password, 10)
	
	const newOwner= new Owner({
		name: req.body.name,
		email: req.body.email,
		password: newPassword,
	})
	console.log(newPassword)
	try { 
		console.log(newOwner)
		await newOwner.save();
		res.status(201).json(Owner);
	} catch (err) {
		console.log(err.message)
		res.status(409).json({ message: err.message });
	}
}
const Ownerlogin = async (req, res) => {
    const owner = await Owner.findOne({
		email: req.body.email,
	})

	if(!owner) {
		// return { status: 'error', error: 'Invalid login' }
		 return res.json( { status: 'error', error: 'Invalid login' })
	
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		owner.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: Owner.name,
				email: Owner.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok' ,Owner: token })
	} else {
		return res.json({ status: 'error', Owner: false })
	}
}
module.exports={
    Ownerlogin,
    Ownerregister
}