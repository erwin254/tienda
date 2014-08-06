class Person extends Backbone.Model
	defaults:
		name: 'Jorge'
		occupation: 'developer'


class PersonView extends Backbone.View
	initialize: ->
		@model.on 'hola', @siempre
		@model.on 'chao', @chao

	siempre:->
		console.log "que tal"

	chao: ->
		console.log "adios"

#person = new Person name: "erwin"


#personView = new PersonView model: person

#person.trigger 'hola'

#console.log person.toJSON()

#bear1 = new Bear name: "pedro"
#bear2 = new Bear name: "pablo"
#bear3 = new Bear name: "andres"
#bears = new Bears ([bear1, bear2, bear3])

#bears = new Bears
#bears.fetch()

##init  = new MainView model : bear1
#bear1.trigger 'initialize'


product_view = new ProductView
