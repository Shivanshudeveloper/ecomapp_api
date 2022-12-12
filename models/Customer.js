const mongoose = require('mongoose')

const Customerschema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		
	}
)

const Customer = mongoose.model('Customer', Customerschema)

module.exports = Customer
