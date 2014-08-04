// Generated by CoffeeScript 1.7.1
var Bears,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Bears = (function(_super) {
  __extends(Bears, _super);

  function Bears() {
    return Bears.__super__.constructor.apply(this, arguments);
  }

  Bears.prototype.model = Bear;

  Bears.prototype.url = 'http://localhost:8080/api/bears';

  Bears.prototype.syncCollection = function() {
    return this.each(function(model) {
      return model.save();
    });
  };

  return Bears;

})(Backbone.Collection);
