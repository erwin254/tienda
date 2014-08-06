// Generated by CoffeeScript 1.7.1
var ProductView,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ProductView = (function(_super) {
  __extends(ProductView, _super);

  function ProductView() {
    return ProductView.__super__.constructor.apply(this, arguments);
  }

  ProductView.prototype.el = $('#products');

  ProductView.prototype.initialize = function() {
    this.collection = new Products;
    this.collection.on('add', this.renderProduct);
    this.collection.fetch();
    return this.render();
  };

  ProductView.prototype.renderProduct = function(modelo) {
    var view;
    console.log(modelo);
    view = new RenderProductView({
      model: modelo
    });
    return $('#products').append(view.render().$el);
  };

  return ProductView;

})(Backbone.View);
