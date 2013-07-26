var fs = require('fs');

var getKey = function (source) {
  var map = source.split('').sort();
  return map.join();
}

function Anagram () {
  this.dictionary = {};
  this.createDictionary('/usr/share/dict/words');
}

Anagram.prototype.createDictionary = function (path) {
  var self = this;
  fs.readFile(path, { encoding : 'utf8' }, function (err, data) {
    var dic = data.split('\n');
    var i = 0;
    for (i = 0; i < dic.length; i ++) {
      var key = getKey(dic[i]);
      if (!self.dictionary[key]) {
        self.dictionary[key] = [];
      }
      self.dictionary[key].push(dic[i]);
    }
  });
}

Anagram.prototype.getAnagrams = function (word) {
  var key = getKey(word);
  return this.dictionary[key];
}

module.exports = exports = function () {
  return new Anagram ();
};