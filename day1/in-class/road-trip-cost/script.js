/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main(input) {
  var fuelEfficiency = 9;
  var fuelCost = 2.2;
  var fuelConsumed = input / fuelEfficiency;
  var tripCost = fuelCost * fuelConsumed;
  var output = `A road trip of ${input} km in the new Ferrari will cost approximately $${tripCost.toFixed(
    2
  )}.`;
  return output;
}
