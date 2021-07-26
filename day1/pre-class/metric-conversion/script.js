/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main(input) {
  var distanceInKm = input;
  var distanceInMiles = distanceInKm * 0.62;
  var output = `Hi! ${input} kilometres is equal to ${distanceInMiles} miles.`;
  return output;
}
