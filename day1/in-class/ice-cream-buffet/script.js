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
  // Container and cup capacity in millilitres
  var containerVolume = 400;
  var cupVolume = 70;
  var iceCreamConsumed = cupVolume * input;

  // Round the number of containers consumed to the next integer
  var containersConsumed = Math.ceil(iceCreamConsumed / containerVolume);
  return `You will consume ${containersConsumed} containers of ice cream if you make ${input} trips to the ice cream station.`;
}
