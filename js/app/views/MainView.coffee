class MainView extends Backbone.View
	initialize: -> 
		@model.on 'initialize', @render
	render: ->
		console.log @.toJSON().name 



