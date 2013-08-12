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
  'keyboard',
  'reverse',
  'spiral'
], function (
  $,
  _,
  Recurse,
  Timer,
  // Reader,
  Anagram,
  Keyboard,
  Reverse,
  Spiral
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

  console.log(Reverse('This is a sentense.'))

  var matrix = [[11, 12, 13, 14, 15],[21, 22, 23, 24, 25],[31, 32, 33, 34, 35],[41, 42, 43, 44, 45]];
  Spiral(matrix);
});

