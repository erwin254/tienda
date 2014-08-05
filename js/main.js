// Generated by CoffeeScript 1.7.1
var ListView, Person, PersonView, list_view,
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

ListView = (function(_super) {
  __extends(ListView, _super);

  function ListView() {
    return ListView.__super__.constructor.apply(this, arguments);
  }

  ListView.prototype.el = $('body');

  ListView.prototype.initialize = function() {
    this.collection = new Bears;
    this.collection.fetch();
    return this.render();
  };

  ListView.prototype.render = function() {
    return $(this.el).append('<button>holaa</button>');
  };

  ListView.prototype.showItems = function() {
    var bear, _i, _len, _ref, _results;
    _ref = this.collection.toJSON();
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      bear = _ref[_i];
      _results.push($(this.el).append("<li>" + bear.name + " " + bear.occupation + "</li>"));
    }
    return _results;
  };

  ListView.prototype.events = {
    'click button': 'showItems'
  };

  return ListView;

})(Backbone.View);

list_view = new ListView;
