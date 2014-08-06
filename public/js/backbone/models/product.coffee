class Product extends Backbone.Model
	initialize: ->
		console.log 'se crea producto'

	defaults:
		img: '/img/default.jpg'
		name: 'Product'
		description: 'one product, no more...'
		price: '0'
		size:
			long: '0'
			width:'0'
			height: '0'

