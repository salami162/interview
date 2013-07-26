var fs = require('fs');

function searchFile () {
}

searchFile.prototype._getArrayFromFile = function (path) {
  var data = fs.readFileSync(path, { encoding : 'utf8' });
  var array = data.split('\n');
  array.pop();
  return array;
}

searchFile.prototype.findCommon = function (options) {
 var data1 = this._getArrayFromFile(options.source);
 var data2 = this._getArrayFromFile(options.target);

 console.log('data1 = ' , data1);
 console.log('data2 = ' , data2);

 return this._intersection(data1, data2);
}

searchFile.prototype._intersection = function(data1, data2) {
  var i,j;
  var result = [];

  for (i = 0, j = 0; i < data1.length && j < data2.length; ) {
    var char1 = parseInt(data1[i], 10);
    var char2 = parseInt(data2[j], 10);

    if (char1 === char2) {
      result.push(char1);
      i ++;
      j ++;
    }
    else if (char1 < char2) {
      i++;
    }
    else {
      j++;
    }
  }

  return result;
};

searchFile.prototype._inArray = function (array, start, end, target) {
  var mid = ( (end - start) / 2 ) + start;
  var midValue = array[mid];
  if (start > end) {
    return false;
  }
  if (target === midValue) {
    return true;
  }

  if (target < midValue) {
    return this._inArray(array, start, mid, target);
  }
  else {
    return this._inArray(array, mid + 1, end, target);
  }
  return false;
}

module.exports = exports = function () {
  return new searchFile();
}