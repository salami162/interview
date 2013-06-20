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
  'vendor/underscore',
  'recurse',
  'timer'
], function (
  $,
  _,
  Recurse,
  Timer
) {

  Recurse.join('hello')('world')('goodbye')();
  var allFoos = Recurse.find('foo');
  console.log(allFoos);
  // Timer(1, 10, 500);
});

