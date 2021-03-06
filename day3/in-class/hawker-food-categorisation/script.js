/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Global Variables
 * ------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main(input) {
  var base;
  if (
    input == "chicken rice" ||
    input == "nasi lemak" ||
    input == "bak kut teh"
  ) {
    base = "rice";
  } else if (input == "hokkien mee" || input == "laksa") {
    base = "noodle";
  } else if (input == "roti prata") {
    base = "misc.";
  } else {
    return "Please choose a dish.";
  }
  return `The dish "${input}" has a [${base}] base.`;
}
