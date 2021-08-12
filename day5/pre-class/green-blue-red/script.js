/**
 * ------------------------------------------------------------------------
 * Global Variables
 * ------------------------------------------------------------------------
 */

var mode = "green";

/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

var main = function (input) {
  if (input == "green") {
    mode = "green";
  } else if (input == "blue") {
    mode = "blue";
  } else if (input == "red") {
    mode = "red";
  } else {
    return `Please enter "green", "blue" or "red".`;
  }

  var myOutputValue =
    "A fool sees not the same tree that a wise man sees.<br>-William Blake";

  if (mode == "blue") {
    myOutputValue =
      "The sea, once it casts its spell, holds one in its net of wonder forever.<br>-Jacques Cousteau";
  }

  if (mode == "red") {
    myOutputValue =
      "When the devil offers you a rose, its petals are laced with poison.<br>-Matshona Dhliwayo";
  }

  return myOutputValue;
};
