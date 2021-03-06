// Generated by CoffeeScript 1.7.1
var Person, PersonView, product_view,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Person = (function(_super) {
  __extends(Person, _super);

  function Person() {
    return Person.__super__.constructor.apply(this, arguments);
  }

  Person.prototype.defaults = {
    name: 'Jorge',
    occupation: 'developer'
  };

  return Person;

})(Backbone.Model);

PersonView = (function(_super) {
  __extends(PersonView, _super);

  function PersonView() {
    return PersonView.__super__.constructor.apply(this, arguments);
  }

  PersonView.prototype.initialize = function() {
    this.model.on('hola', this.siempre);
    return this.model.on('chao', this.chao);
  };

  PersonView.prototype.siempre = function() {
    return console.log("que tal");
  };

  PersonView.prototype.chao = function() {
    return console.log("adios");
  };

  return PersonView;

})(Backbone.View);

product_view = new ProductView;
