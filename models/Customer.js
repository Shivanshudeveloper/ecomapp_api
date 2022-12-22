const mongoose = require('mongoose')

const Customerschema = new mongoose.Schema(
	{
		fname: { type: String, required: true },
		lname: { type: String, required: false },
		country: { type: String, required: false },
		company: { type: String, required: false },
		state: { type: String, required: false },
		phone: { type: String, required: false },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		
	}
)

const Customer = mongoose.model('Customer', Customerschema)

module.exports = Customer
