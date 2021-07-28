/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */
var EMOJI = "🎉";
/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */

function generateShape(dimension) {
  output = "";
  for (var rowCounter = dimension; rowCounter > 0; rowCounter -= 1) {
    for (var colCounter = 0; colCounter < rowCounter; colCounter += 1) {
      output += EMOJI;
    }
    output += "<br>";
  }
  return output;
}
/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main(input) {
  return generateShape(input);
}
