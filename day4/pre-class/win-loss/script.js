/**
 * ------------------------------------------------------------------------
 * Global Variables
 * ------------------------------------------------------------------------
 */

var winCount = 0;
var playsCount = 0;

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

/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main(input) {
  var randomDiceNumber = rollDice();
  playsCount += 1;
  var winPercent = Math.floor((Number(winCount) / Number(playsCount)) * 100);
  var myOutputValue = `You win ${winPercent}% of the time. You guessed ${input} and just rolled a ${randomDiceNumber}. You lose!`;

  if (randomDiceNumber == input) {
    winCount += 1;
    winPercent = Math.floor((Number(winCount) / Number(playsCount)) * 100);
    myOutputValue = `You win ${winPercent}% of the time. You guessed ${input} and just rolled a ${randomDiceNumber}. You win!`;
  }

  return myOutputValue;
}
