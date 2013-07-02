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
  'timer',
  'reader'
], function (
  $,
  _,
  Recurse,
  Timer,
  Reader
) {

  Recurse.join('hello')('world')('goodbye')();
  var allFoos = Recurse.find('foo');
  console.log(allFoos);

  var newReader = new Reader();

  newReader
    .read('Limin', { timeout : 200 })
    .done(function (info) {
      console.log(info);
  });


  newReader
    .read('Raquel', { timeout : 200 })
    .done(function (info) {
      console.log(info);
  });

  // Timer(1, 10, 500);
});

