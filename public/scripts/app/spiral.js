define(function () {
  var matrix = [[11, 12, 13, 14, 15],[21, 22, 23, 24, 25],[31, 32, 33, 34, 35],[41, 42, 43, 44, 45]];

  // 11 12 13 14 15 25 35 45 44 43 42 41 31 21 22 23 24 34 33 32
  // assume matrix is properly structured.

  function spirtalOrder (matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
      return;
    }

    var output = [];
    var rows = matrix.length;

    var start = 0;
    var end = matrix[0].length;

    for (var i = start; i < rows/2; i++ ) {

      var mirrowIndex = rows - 1 - i;
      var currentRow = matrix[i];
      var mirrowRow = matrix[mirrowIndex];
      var isSame = false;

      // if cur row is the same as mirrow row
      if (i === mirrowIndex) {
        isSame = true;
      }

      if (start >= end) {
        // handle current row
        for (var j = start; j < end; j ++) {
          ouput.push(currentRow[j]);
        }

        if (!isSame) {
          // handle going down
          for (var jj = start + 1; jj < mirrowIndex - 1; jj ++) {
            output.push(matrix[jj][end]);
          }

          // handle mirrow row
          for (var k = end-1; k >= start; k --) {
            output.push(mirrowRow[k]);
          }

          // handle going up
          for (var kk = mirrowIndex - 1; kk > start; kk --) {
            output.push(matrix[kk][start]);
          }

        }
        start = start + 1;
        end = end - 1;
      }
    }

    console.log(output);
  }
  
  return spirtalOrder;
});

