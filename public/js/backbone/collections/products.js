// Generated by CoffeeScript 1.7.1
var Products,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Products = (function(_super) {
  __extends(Products, _super);

  function Products() {
    return Products.__super__.constructor.apply(this, arguments);
  }

  Products.prototype.initialize = function() {
    return console.log('se crea coleccion');
  };

  Products.prototype.models = Product;

  Products.prototype.url = 'http://localhost:8080/api/products';

  Products.prototype.syncCollection = function() {
    return this.each(function(model) {
      return model.save();
    });
  };

  return Products;

})(Backbone.Collection);
