/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */

function generateSquare(dimension) {
  var output = "";
  for (var rowCounter = 1; rowCounter <= dimension; rowCounter += 1) {
    for (var colCounter = 1; colCounter <= dimension; colCounter += 1) {
      output += "🌊";
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
  return generateSquare(input);
}
