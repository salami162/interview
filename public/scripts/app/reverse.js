define(function () {

  function revert(input) {
    var i;
    for (i = 0; i < input.length / 2; i ++) {
      input = swap(input, i, input.length - i - 1);
    }
    return input;
  }

  function swap(string, a, b) {
    var tempA = string[a],
        tempB = string[b],
        newString = string;
    newString = newString.slice(0, Math.max(a, 0)) + tempB + newString.slice(a + 1);
    newString = newString.slice(0, Math.max(b, 0)) + tempA + newString.slice(b + 1);
    return newString;
  }

  return function (input) {
    if (!input) {
      return;
    }

    var output = "",
        space = " ",
        temp = "",
        i = 0;
    
    input = revert(input);

    for (var i = 0; i < input.length; i ++) {

      var c = input[i];
      if (c !== space) {
        temp = temp + c;
      }
      // if it is a space.
      else {
        output += revert(temp) + c;
        temp = "";
      }
    }
    output += revert(temp);
    return output;
  };
});

