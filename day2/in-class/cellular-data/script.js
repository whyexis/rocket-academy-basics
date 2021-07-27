/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */
function calcCostPerGb(gbUsage) {
  var costPer50Gb = 19.99;
  var numberOfPlans = Math.ceil(gbUsage / 50);
  var costPerGb = (costPer50Gb * numberOfPlans) / gbUsage;
  return `If you use ${gbUsage} GB of data every month and pay $${costPer50Gb} for every 50 GB, you are paying $${costPerGb.toFixed(
    2
  )} per GB every month.`;
}

/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main(input) {
  return calcCostPerGb(input);
}
