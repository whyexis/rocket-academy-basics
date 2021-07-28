/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */
var EMOJI_BORDER = "🚫";
var EMOJI_INNER = "😫";

/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */

function generateShape(dimension) {
  var output = "";
  for (var rowCounter = 1; rowCounter <= dimension; rowCounter += 1) {
    // Create the top or bottom border for the square
    if (rowCounter == 1 || rowCounter == dimension) {
      for (var colCounter = 1; colCounter <= dimension; colCounter += 1) {
        output += EMOJI_BORDER;
      }
    } else {
      for (var colCounter = 1; colCounter <= dimension; colCounter += 1) {
        if (colCounter == 1 || colCounter == dimension) {
          output += EMOJI_BORDER;
        } else {
          output += EMOJI_INNER;
        }
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
  return generateShape(input);
}
