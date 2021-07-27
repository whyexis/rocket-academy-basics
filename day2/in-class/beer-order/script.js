/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */
function calcKegsNeeded(avgNumOfCustPerDay) {
  var numOfDaysPerQuarter = 90;
  var drinksPerCust = 2; // pints
  var beerInKeg = 124; // pints
  var numKegsNeeded = Math.ceil(
    (drinksPerCust * avgNumOfCustPerDay * numOfDaysPerQuarter) / beerInKeg
  ); // Round up the number of kegs, better to have slightly more than not enough
  return `If an average of ${avgNumOfCustPerDay} customers visit every day and each customer drinks ${drinksPerCust} pints, then the bar needs ${numKegsNeeded} kegs every quarter.`;
}

/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main(input) {
  return calcKegsNeeded(input);
}
