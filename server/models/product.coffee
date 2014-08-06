mongoose = require 'mongoose'

BearSchema = new mongoose.Schema( 
	img: String 
	name: String  
	description: String
	price: String
	size:
		long: String
		width: String
		height: String
	)

module.exports = mongoose.model 'Product', BearSchema 