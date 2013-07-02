define([
  'vendor/jquery'
], function ($) {

  function reader () {
    this.people = {};
    console.log('reader created!');
  }

  reader.prototype.read = function (username) {
    var dfd = $.Deferred();
    var self = this;

    if (this.people[username]) {
      console.log('cached data found');
      dfd.resolve(this.people[username]);
    }
    else {
      console.log('no cached data found');
      $.ajax({
        url : '/data',
        dataType : 'json'
      }).done(function (data) {
        if (data[username]) {
          self.people[username] = data[username];
          dfd.resolve(self.people[username]);
        }
        else {
          dfd.reject({
            error : 'No user with name: ' + username + ' exists!'
          });
        }
        dfd.resolve(data);
      })
    }
    return dfd.promise();
  }

  return reader;
});