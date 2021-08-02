/**
 * ------------------------------------------------------------------------
 * Global Variables
 * ------------------------------------------------------------------------
 */

var withinNumber = generateWithinNumber();
var consecutiveWins = 0;
/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */

function generateWithinNumber() {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  return randomInteger + 1;
}

var diceRoll = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

function generateDigit() {
  var randomDecimal = Math.random() * 10;
  var randomInteger = Math.floor(randomDecimal);
  return String(randomInteger);
}

function play4D(guess) {
  if (Number(guess).isNaN || String(guess).length != 4) {
    return "Now you are playing 4D, please enter a valid 4 digit combination.";
  }
  consecutiveWins = 0;

  var randomCombination = generateDigit();
  randomCombination += generateDigit();
  randomCombination += generateDigit();
  randomCombination += generateDigit();

  if (guess == randomCombination) {
    return `You guessed ${guess} and the combination is ${randomCombination}, you win! <br><br>Back to guessing dice rolls!`;
  }
  return `You guessed ${guess} but the combination is ${randomCombination}, better luck next time! <br><br>Back to guessing dice rolls!`;
}
/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

var main = function (input) {
  if (consecutiveWins == 2) {
    return play4D(input);
  }

  if (Number(input) < 1 || Number(input) > 6) {
    return "Now you are guessing dice rolls, please enter a number from 1 to 6.";
  }

  var diceRoll1 = diceRoll();
  var diceRoll2 = diceRoll();
  var myOutputValue = `You guessed ${input}, but it is not within +- ${withinNumber} of your rolls ${diceRoll1} and ${diceRoll2}, you lose :(`;

  if (
    (input <= diceRoll1 + withinNumber && input >= diceRoll1 - withinNumber) ||
    (input <= diceRoll2 + withinNumber && input >= diceRoll2 - withinNumber)
  ) {
    myOutputValue = `You rolled ${diceRoll1} and ${diceRoll2}. You guessed ${input} which is within +-${withinNumber} of either rolls, you win :)`;
    consecutiveWins += 1;
    withinNumber = generateWithinNumber();
  }

  if (consecutiveWins == 2) {
    myOutputValue +=
      "<br><br>You have won twice in a row! Seems like you are lucky enough to play a game of 4D in the next round!";
  }

  return myOutputValue;
};
