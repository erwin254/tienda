express = require 'express'
bodyParser = require 'body-parser'
mongoose = require 'mongoose'
mongoose.connect( 'mongodb://localhost:27017/test')
Bear = require './models/bear'

app = express()

app.use(bodyParser())
port = process.env.PORT or 8080
router = express.Router()


router.use((req, res, next)->
	console.log "asdasd2"
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
	next())

router.get('/',(req, res)->
	res.json(message: "asdasd"))

router.route('/bears')

	.post((req, res)->
		bear = new Bear()
		bear.name = req.body.name
		console.log bear.name
		bear.save((err)->
			if (err) 
				res.send(err)
				console.log "error"
			res.json( message: 'bear created!')
			))

	.get((req, res)->
		Bear.find((err,bears)->
			if (err) then res.send(err)
			res.json(bears)))


app.use('/api', router)
app.listen port
console.log "arriba"