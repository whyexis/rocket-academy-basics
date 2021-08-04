/**
 * ------------------------------------------------------------------------
 * Global Variables
 * ------------------------------------------------------------------------
 */

var rollsCount = [0, 0, 0, 0, 0, 0];

/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */

var rollDice = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

function getMostRolled() {
  max = Math.max.apply(null, rollsCount);
  return rollsCount.indexOf(max) + 1;
}

/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main(input) {
  var diceRoll = rollDice();
  rollsCount[diceRoll - 1] += 1;

  var message = `You guessed ${input} but rolled a ${diceRoll}, better luck next time!`;

  if (input == diceRoll) {
    message = `Congrats, you guessed ${input} and rolled a ${diceRoll}, you win!`;
  }

  message += `<br><br>Your most rolled number is ${getMostRolled()}.`;
  console.table(rollsCount);
  return message;
}
