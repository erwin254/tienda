class Products extends Backbone.Collection
	initialize: ->
		console.log 'se crea coleccion'
	
	models: Product
	url: 'http://localhost:8080/api/products'

	syncCollection: ->
		@each (model)->
			model.save()