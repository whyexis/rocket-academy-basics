/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */

var diceRoll = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};
/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main(input) {
  var diceRoll1 = diceRoll();
  var diceRoll2 = diceRoll();
  var totalDiceRoll = diceRoll1 + diceRoll2;
  var myOutputValue = `You guessed ${input} and your rolls are ${diceRoll1} and ${diceRoll2}, which does not match or add up to 11, better luck next time!`;
  if (diceRoll1 == input || diceRoll2 == input || totalDiceRoll == 11) {
    myOutputValue = `You guessed ${input} and your rolls are ${diceRoll1} and ${diceRoll2}, which matches or adds up to 11, you win!`;
  }
  return myOutputValue;
}
