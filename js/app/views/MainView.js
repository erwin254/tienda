// Generated by CoffeeScript 1.7.1
var MainView,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

MainView = (function(_super) {
  __extends(MainView, _super);

  function MainView() {
    return MainView.__super__.constructor.apply(this, arguments);
  }

  MainView.prototype.initialize = function() {
    return this.model.on('initialize', this.render);
  };

  MainView.prototype.render = function() {
    return console.log(this.toJSON().name);
  };

  return MainView;

})(Backbone.View);
