class ProductView extends Backbone.View
	el: $ '#products'

	initialize: ->
		@collection = new Products
		@collection.on( 'add', @renderProduct) 
		@collection.fetch()
		@render()

	renderProduct: (modelo)->
		console.log modelo
		view = new RenderProductView(model: modelo)
		$('#products').append(view.render().$el)
