var fs = require('fs');
var _ = require('underscore');

var dimsumReader = require('dimsum-reader');
var anagram = require('../lib/anagram.js')();
var searchFile = require('../lib/searchFiles.js')();

// dimsum-reader examples
// var newDr = new dimsumReader('qa');
// newDr.setEnvironment('qa');
// newDr.read('Academy', {}).done(function (data) {
//   var Academy = newDr.getClientDetails('Academy');
//   console.log('Academy = ', Academy);
// });

// anagram examples 
// var array = anagram.getAnagrams('own');

// search common integers
// var results = searchFile.findCommon({
//   source : '/Users/limin.shen/Downloads/list/10-a.txt', 
//   target : '/Users/limin.shen/Downloads/list/10-b.txt'
// });


exports.index = function (req, res) {

  var data = {
    title : 'Let\'s has some FUN!'
  };
  res.render('index', data);
};

exports.bvLocal = function (req, res) {

  var data = {
    title : 'BV Local Test Page'
  };
  res.render('bvLocal', data);
};

exports.data = function (req, res) {

  var data = {
    Limin : {
      Name : 'Limin Shen',
      Gender : 'F',
      Occupation : 'Software Engineer'
    },
    Raquel : {
      Name : 'Raquel Velez',
      Gender : 'F',
      Occupation : 'Software Engineer'
    }
  };
  res.write( JSON.stringify(data) );
  res.end();
};
