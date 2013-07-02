var dimsumReader = require('dimsum-reader');

exports.index = function (req, res) {

  var newDr = new dimsumReader('qa');

  // newDr.setEnvironment('qa');
  var clients;

  // newDr.read('Academy', {}).done(function (data) {
  //   var Academy = newDr.getClientDetails('Academy');
  //   console.log('Academy = ', Academy);
  // });

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
