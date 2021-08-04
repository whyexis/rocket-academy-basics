/**
 * ------------------------------------------------------------------------
 * Global Variables
 * ------------------------------------------------------------------------
 */

 var points = 0;

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
  var diceRoll = rollDice();

  if (input == diceRoll) {
    points += 5;
    return `Congrats, you guessed ${input} and rolled a ${diceRoll}, you win 5 points! Your current points is ${points}.`;
  }

  if (input >= diceRoll - 1 && input <= diceRoll + 1) {
    points += 4;
    return `Congrats, you guessed ${input} and rolled a ${diceRoll}, your guess is within +-1 of the roll and you win 4 points! Your current points is ${points}.`;
  }

  if (input >= diceRoll - 2 && input <= diceRoll + 2) {
    points += 3;
    return `Congrats, you guessed ${input} and rolled a ${diceRoll}, your guess is within +-2 of the roll and you win 3 points! Your current points is ${points}.`;
  }

  if (input >= diceRoll - 3 && input <= diceRoll + 3) {
    points += 2;
    return `Congrats, you guessed ${input} and rolled a ${diceRoll}, your guess is within +-3 of the roll and you win 2 points! Your current points is ${points}.`;
  }

  if (input >= diceRoll - 5 && input <= diceRoll + 5) {
    points += 1;
    return `Congrats, you guessed ${input} and rolled a ${diceRoll}, your guess is within +-5 of the roll and you win 1 point! Your current points is ${points}.`;
  }

  return `You guessed ${input} but rolled a ${diceRoll}, better luck next time! Your current points is ${points}.`;
}
