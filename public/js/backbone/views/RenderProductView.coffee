class RenderProductView extends Backbone.View
	template: _.template($('#tlpProduct').html())
	render:->
		@.$el.html(@.template(@model.toJSON()))
		return @