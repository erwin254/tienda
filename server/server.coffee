express = require 'express'
bodyParser = require 'body-parser'
mongoose = require 'mongoose'
mongoose.connect( 'mongodb://localhost:27017/tienda')
Product = require './models/product'

app = express()

app.use(bodyParser())
port = process.env.PORT or 8080
router = express.Router()


router.use((req, res, next)->
	res.setHeader('Access-Control-Allow-Origin', 'http://tienda.mk');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
	next())

router.get('/',(req, res)->
	res.json(message: "llamado al server"))

router.route('/products')

	.post((req, res)->
		product = new Product()
		product.img = req.body.img
		product.name = req.body.name
		product.description = req.body.description
		product.price = req.body.price
		product.size.long = req.body.size.long
		product.size.width = req.body.size.width
		product.size.height = req.body.size.height
		
		product.save((err)->
			if (err) 
				res.send(err)
				console.log "error"
			res.json( message: 'product created!')
			))

	.get((req, res)->
		Product.find((err,products)->
			if (err) then res.send(err)
			res.json(products)))

app.use('/api', router)
app.listen port
console.log "upa!"