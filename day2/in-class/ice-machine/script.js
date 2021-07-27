/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */

function calcNumHours(numGuests) {
  var drinksPerGuest = 2;
  var icePerDrink = 4;
  // Each ice cube weights 1.5 grams
  var iceCubeWeight = 1.5;
  var gramsPerPounds = 454;
  // ice production rate at 5 pounds of ice per hour
  var iceProductionRate = 5;
  // Weight of ice needed in grams
  var iceWeightNeeded =
    numGuests * drinksPerGuest * icePerDrink * iceCubeWeight;
  var numHours = iceWeightNeeded / gramsPerPounds / iceProductionRate;
  return `The hotel needs to run their ice machine for ${numHours.toFixed(
    2
  )} hours to make enough ice for an event with ${numGuests} guests.`;
}

/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main(input) {
  return calcNumHours(input);
}
