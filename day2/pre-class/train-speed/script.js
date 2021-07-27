/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * @param   {Number}  delayMins Delay in minutes
 * @return  {String}            Output message
 * ------------------------------------------------------------------------
 */
function calcTrainSpeed(delayMins) {
  var train1Speed = 200;
  var timeTaken = 2;
  var distance = train1Speed * timeTaken;
  var train2Speed = distance / (timeTaken - delayMins / 60);
  return `Train 2 needs to travel at ${train2Speed.toFixed(
    2
  )} kph to arrive in Tokyo at the same time as Train 1 if there is a delay of ${delayMins} minutes. Don't miss Tokyo Olympics 2020!`;
}

/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main(input) {
  return calcTrainSpeed(input);
}
