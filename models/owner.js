const mongoose = require('mongoose')

const Ownerschema = new mongoose.Schema(
	{
		// name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		
	}
)

const Owner = mongoose.model('Owner', Ownerschema)

module.exports = Owner