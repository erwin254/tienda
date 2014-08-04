mongoose = require 'mongoose'

BearSchema = new mongoose.Schema( name: String )

module.exports = mongoose.model 'Bear', BearSchema 