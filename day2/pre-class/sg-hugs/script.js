/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * @param {Number}  hugDuration   Average number of seconds for a hug
 * @return {String}               Output message
 * ------------------------------------------------------------------------
 */
function calcHugs(hugDuration) {
  var populationSG = 5000000;
  var sleepEatTime = 9;
  var dailyHugHours = 24 - sleepEatTime;
  var years = (populationSG * hugDuration) / 3600 / dailyHugHours / 365;
  return `If you spend 9 hours for sleep and meals every day, it will take you ${years.toFixed(
    2
  )} years to hug all ${populationSG} people in Singapore for ${hugDuration} seconds.`;
}

/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main(input) {
  return calcHugs(input);
}
