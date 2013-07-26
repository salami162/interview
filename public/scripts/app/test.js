define([
  'vendor/underscore'
], function (_) {
  var anagram = function (source, target) {
    var resultSource = {};
    var resultTarget = {};

    if (source.length != target.length) {
      return false;
    }

    var i;
    for ( i = 0; i < source.length; i++ ) {
      var charStr = source[i];
      var charStr1 = target[i];
      // source map
      if (!resultSource[charStr]) {
        resultSource[charStr] = 1;
      }
      else {
        resultSource[charStr] += 1;
      }

      // target map
      if (!resultTarget[charStr1]) {
        resultTarget[charStr1] = 1;
      }
      else {
        resultTarget[charStr1] += 1;
      }
    }

    return _.isEqual(resultSource,resultTarget);
  }

  return anagram;
});
