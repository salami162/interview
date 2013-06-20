requirejs.config({
    baseUrl: 'scripts/app',
    paths: {
      vendor: '../vendor'
    }
});


// define window
define('window', function () {
  return window;
});


require([
  'vendor/jquery',
  'vendor/underscore'
], function (
  $,
  _
) {

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
      };

      return recurse.apply(null, arguments);
  };

  console.log('done');
});

