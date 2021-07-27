/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */
function calcAirConCost(hours) {
  var airConRating = 2;
  var costOfElectricity = 0.2;
  var usageCost = airConRating * hours * costOfElectricity;
  return `If you use the air con for ${hours} hour(s), it will cost $${usageCost.toFixed(
    2
  )}.`;
}
/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main(input) {
  return calcAirConCost(input);
}
