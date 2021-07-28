/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */

// Intended Method

function generateCharacters(input) {
  var output = "";
  for (var counter = 1; counter <= input; counter += 1) {
    output += "👍";
  }
  return output;
}
// */

// Unintended method
/*
function generateCharacters(input) {
  return "👍".repeat(input);
}
// */

/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main(input) {
  return generateCharacters(input);
}
