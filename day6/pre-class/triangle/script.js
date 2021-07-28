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
    for (var colCounter = 1; colCounter <= dimension; colCounter += 1) {
      if (colCounter <= rowCounter) {
        output += EMOJI;
      }
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
