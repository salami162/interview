exports.index = function (req, res) {
  var data = {
    title : 'Let\'s has some FUN!'
  };
  res.render('index', data);
};
