class Bears extends Backbone.Collection
	model : Bear
	url : 'http://localhost:8080/api/bears'
	syncCollection: ->
		@each (model)->
			model.save()