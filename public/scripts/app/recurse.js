define(function () {
  var fn = function () {
      var list = [];

      function recurse () {
          var args = [].slice.call(arguments);

          if (!args.length) {
              console.log( list.join(' ') );
          } else {
              list = list.concat(args);
              return recurse;
          }
      }

      return recurse.apply(null, arguments);
  };

  var gebc = function (className) {
    var found = [];
    var regex = new RegExp(className);

    function find (el) {
        var children = [].slice.call(el.childNodes);
        var i, child, _c;
        var length = children.length;

        for (i = 0; i < length; i++) {
            child = children[i];
            _c = child.className && child.className.split(' ');

            if ( _c && _c.length && _c.indexOf(className) > -1 ) {
                found.push(child);
            }

            find(child);
        }
    }
    find(document);

    return found;
  };

  return {
    join : fn,
    find : gebc
  };
});
