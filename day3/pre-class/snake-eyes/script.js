/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */

function diceRoll() {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
}

/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main(input) {
  var diceRoll1 = diceRoll();
  var diceRoll2 = diceRoll();
  console.log("dice rolls 1 and 2", diceRoll1, diceRoll2);

  var output = `You guessed ${input}, but rolled ${diceRoll1} and ${diceRoll2}, you lose.`;

  if (
    (diceRoll1 - 1 <= input && input <= diceRoll1 + 1) ||
    (diceRoll2 - 1 <= input && input <= diceRoll2 + 1)
  ) {
    var output = `You rolled ${diceRoll1} and ${diceRoll2}. You guessed ${input}, which is within +- 1 of either dice, you win!`;
  }

  if (diceRoll1 == 1 && diceRoll2 == 1) {
    output = `You rolled a snake eyes combination of 1 and 1, you win!`;
  }

  return output;
}
