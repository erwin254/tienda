router.route('/bears')

.post((req,res)->
	bear = new Bear()
	bear.name = req.body.name;

	bear.save((err)->
		if (err) then res.send(err)
		res.json( message: 'bear created!')
		))

app.use('/api', router)