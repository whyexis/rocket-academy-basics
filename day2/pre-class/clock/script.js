/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */
function mod(n, m) {
  var remainder = n % m;
  return Math.floor(remainder >= 0 ? remainder : remainder + m);
}
/**
 * ------------------------------------------------------------------------
 * Since there are 60 minutes in an hour, divide the clock into 60 parts.
 * The hour hand is at 1, so that is the starting point and also marks the offset.
 * Use the modulus to determine the angle.
 * @param   {Number}  minutes   Minutes past 1pm
 * @return  {String}            Output message
 * ------------------------------------------------------------------------
 */
function calcAngle(minutes) {
  var offset = 5;
  var angle = mod(minutes - offset, 60) * 6;
  return `The minutes hand is ${angle} degrees clockwise from the hour hand.`;
}

/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main(input) {
  return calcAngle(input);
}
