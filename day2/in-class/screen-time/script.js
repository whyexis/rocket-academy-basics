/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */
function calcAppUsage(inputHours, lifeExpectancy = 82) {
  var daysInAYear = 365;
  var hoursInADay = 24;
  var appUsageInDays =
    (inputHours * daysInAYear * lifeExpectancy) / hoursInADay;
  return `If you spend ${inputHours} hours a day on an app, you would have spent ${appUsageInDays.toFixed(
    2
  )} days on that app if you lived till ${lifeExpectancy} years old.`;
}

/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main(input) {
  return calcAppUsage(input);
}
