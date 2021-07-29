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
  }

  var myOutputValue =
    "A fool sees not the same tree that a wise man sees. -William Blake";

  if (mode == "blue") {
    myOutputValue =
      "The sea, once it casts its spell, holds one in its net of wonder forever. -Jacques Cousteau";
  }

  if (mode == "red") {
    myOutputValue =
      "When the devil offers you a rose, its petals are laced with poison. -Matshona Dhliwayo";
  }

  return myOutputValue;
};
