/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var EMOJI = "📐";

/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */
function generateTriangle(dimension) {
  var output = "";
  for (var rowCounter = 1; rowCounter <= dimension; rowCounter += 1) {
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
  return generateTriangle(input);
}
