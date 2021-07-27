/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * @param {Number}  guestsNum   Number of guests
 * @return {String}             Output message
 * ------------------------------------------------------------------------
 */

function calcOranges(guestsNum) {
  var recipeOranges = 4;
  var recipeVolume = 0.09;
  var orangesNum = recipeOranges * guestsNum;
  var totalVolume = recipeVolume * guestsNum;
  return `If your wedding has ${guestsNum} guests, you will need ${orangesNum} oranges to produce ${totalVolume} litres of orange juice for everyone to have a glass of orange juice.`;
}
/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main(input) {
  return calcOranges(input);
}
