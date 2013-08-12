define(['vendor/underscore'], function (_) {

  function keyboard() {
    this.ns = 'keyboard';
    this.alphabet = "abcdefghijklmnopqrstuvwkyz";
    this.size = 5;
  }

  keyboard.prototype.buildMap = function () {
    if (this.map) {
      return;
    }
    var self = this,
        map = {};
    _(this.alphabet).each(function (c, index) {
      map[c] = {
        x : Math.floor(index / self.size),
        y : index % self.size
      };
    });
    this.map = map;
  };

  keyboard.prototype.findPath = function (lookupString) {
    var self = this,
        lastPosition = { x : 0, y : 0 },
        path = '';

    if (!this.map) {
      this.buildMap();
    }

    _(lookupString).each(function (s) {
      var position = self.map[s],
          diffX = position.x - lastPosition.x,
          diffY = position.y - lastPosition.y;

      path += diffX > 0 ?
        new Array( Math.abs(diffX) + 1 ).join('d') :
        new Array( Math.abs(diffX) + 1 ).join('u');

      path += diffY > 0 ?
        new Array( Math.abs(diffY) + 1 ).join('r') :
        new Array( Math.abs(diffY) + 1).join('l');

      path += '!';

      lastPosition = position;
    });
    return path;
  };

  return keyboard;
});