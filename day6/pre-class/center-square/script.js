/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */
var EMOJI_BORDER = "✨";
var EMOJI_INNER = "🌳";
var EMOJI_CENTER = "🌟";

/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main(input) {
  var output = "";
  var median = (Number(input) + 1) / 2;
  for (var rowCounter = 1; rowCounter <= input; rowCounter += 1) {
    // Create the top or bottom border for the square
    if (rowCounter == 1 || rowCounter == input) {
      for (var colCounter = 1; colCounter <= input; colCounter += 1) {
        output += EMOJI_BORDER;
      }
    } else {
      for (var colCounter = 1; colCounter <= input; colCounter += 1) {
        if (colCounter == median && rowCounter == median) {
          output += EMOJI_CENTER;
        } else if (colCounter == 1 || colCounter == input) {
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
