/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */
var NORMAL = "normal";
var CREATE = "create";

/**
 * ------------------------------------------------------------------------
 * Global Variables
 * ------------------------------------------------------------------------
 */
var wordsArray = [];
var gameMode = NORMAL;
/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */
function getRandomAdj() {
  var randomDecimal = Math.random() * wordsArray.length;
  var randomInteger = Math.floor(randomDecimal);
  return wordsArray[randomInteger];
}
/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main(input) {
  if (input == CREATE) {
    gameMode = CREATE;
    var randomAdj = getRandomAdj();
    var madLib = `"Yabadabadoo!" he said gleefully as he jumped into his convertible Tree Car and drove off with his ${randomAdj} wife.`;
    return madLib;
  }

  if (input == NORMAL) {
    gameMode = NORMAL;
    return `The game mode is now in input mode.`;
  }

  if (gameMode == CREATE) {
    var randomAdj = getRandomAdj();
    var madLib = `"Yabadabadoo!" he said gleefully as he jumped into his convertible Tree Car and drove off with his ${randomAdj} wife.`;
    return madLib;
  }

  wordsArray.push(input);
  return `The adjective ${input} has been saved.`;
}
