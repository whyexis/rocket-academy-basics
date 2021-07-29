/**
 * ------------------------------------------------------------------------
 * Global Variables
 * ------------------------------------------------------------------------
 */

// Initialise an empty names array
var names = [];

/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main(input) {
  // Set a boolean value found to a default value of false
  var found = false;

  // Loop over the names array, and set found to true if the input name already
  // exists in the names array
  var index = 0;
  while (index < names.length) {
    var currentName = names[index];
    if (currentName == input) {
      found = true;
    }
    index += 1;
  }

  // If no duplicate name was found, add the input name to the names array
  if (!found) {
    names.push(input);
  }

  // Return the full array of names
  var myOutputValue = "All names: " + names;
  return myOutputValue;
}
