/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main(input) {
  var tempInCelsius = (input - 32) / 1.8;
  var output = `${input} °F is equal to ${tempInCelsius.toFixed(1)} °C`;
  return output;
}
