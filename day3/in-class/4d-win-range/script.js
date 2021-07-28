/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */

var randomDigit = function () {
  var randomDecimal = Math.random() * 10;
  var randomInteger = Math.floor(randomDecimal);
  return randomInteger;
};

/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main(input) {
  var randomDigit1 = randomDigit();
  var randomDigit2 = randomDigit();
  var randomDigit3 = randomDigit();
  var randomDigit4 = randomDigit();
  var winCombi =
    String(randomDigit1) +
    String(randomDigit2) +
    String(randomDigit3) +
    String(randomDigit4);

  var myOutputValue = `You entered ${input}, but the 4D is ${winCombi}, you lose!`;

  if (input <= Number(winCombi) + 1000 && input >= Number(winCombi) - 1000) {
    myOutputValue = `You entered ${input}, the 4D is ${winCombi}, you win!`;
  }

  return myOutputValue;
}
