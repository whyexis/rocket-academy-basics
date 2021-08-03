/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var BANANA = "banana";
var CHISEL = "chisel";
var FAUCET = "faucet";

/**
 * ------------------------------------------------------------------------
 * Global Variables
 * ------------------------------------------------------------------------
 */

var numCorrectGuesses = 0;
var winCondition = generateWinCondition();
var lastWord = "";

/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */

var randomWord = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);

  if (randomInteger == 0) {
    return BANANA;
  }
  if (randomInteger == 1) {
    return CHISEL;
  }
  if (randomInteger == 2) {
    return FAUCET;
  }
};

function generateWinCondition() {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  return randomInteger + 2;
}

/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

var main = function (input) {
  if (input == "") {
    return `Please select "banana", "chisel" or "faucet".`;
  }

  var secretWord = randomWord();

  while (secretWord == lastWord) {
    secretWord = randomWord();
  }

  lastWord = secretWord;

  if (input == secretWord) {
    numCorrectGuesses += 1;
  } else {
    numCorrectGuesses = 0;
    return `You guessed ${input}, but the secret word is ${secretWord}. You guessed wrongly and now you need to guess the secret word correctly ${winCondition} times to win.`;
  }

  if (numCorrectGuesses == winCondition) {
    numCorrectGuesses = 0;
    var output = `Congrats, you won after guessing the secret word correctly ${winCondition} times in a row.`;
    winCondition = generateWinCondition();
    return output;
  }

  return `You guessed ${input}, the secret word is ${secretWord}, you have guessed the secret word correctly ${numCorrectGuesses} times and you need to guess the secret word correctly ${
    winCondition - numCorrectGuesses
  } more time(s) to win.`;
};
