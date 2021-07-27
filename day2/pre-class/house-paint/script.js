/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * @param {Number}  paintCost Cost of paint
 * @return {String}           Output message
 * ------------------------------------------------------------------------
 */
function calcPaintCost(paintCost) {
  // Number of doors and windows, and their dimensions
  var doorWindowWidth = 0.9;
  var doorWindowHeight = 1.5;
  var doorWindowNum = 11;

  // Number of rooms and their dimensions
  var roomNum = 6;
  var roomWidth = 3;
  var roomHeight = 1.5;

  // Number of coats and paint coverage in square metres
  var coatNum = 2;
  var coverage = 300;

  var areaDoorWindow = doorWindowHeight * doorWindowWidth * doorWindowNum;
  var areaRoom = roomHeight * roomWidth * 4 * roomNum;
  var paintArea = (areaRoom - areaDoorWindow) * coatNum;

  var totalCost = (paintArea / coverage) * paintCost;
  return `It will cost $${totalCost.toFixed(
    2
  )} to paint the house if the paint costs $${paintCost} per litre.`;
}

/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main(input) {
  return calcPaintCost(input);
}
