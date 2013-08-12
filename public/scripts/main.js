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
  // 'reader',
  'anagram',
  'keyboard'
], function (
  $,
  _,
  Recurse,
  Timer,
  // Reader,
  Anagram,
  Keyboard
) {

  // Recurse.join('hello')('world')('goodbye')();
  // var allFoos = Recurse.find('foo');
  // console.log(allFoos);

  // var newReader = new Reader();

  // newReader
  //   .read('Limin', { timeout : 200 })
  //   .done(function (info) {
  //     console.log(info);
  // });


  // newReader
  //   .read('Raquel', { timeout : 200 })
  //   .done(function (info) {
  //     console.log(info);
  // });

  // Timer(1, 10, 500);
  var result = Anagram('amy', 'yam');
  var result1 = Anagram('amyaa', 'ayama');
  console.log(result, result1);

  var keyboard = new Keyboard();
  console.log(keyboard.findPath('bob'));
});

