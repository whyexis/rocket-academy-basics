/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */
var EMOJI_A = "🟥";
var EMOJI_B = "⚪";

/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */

Array.prototype.swap = function (x, y) {
  var b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
};

function buildOddShape(dimension) {
  var emojiArrayA = [EMOJI_A, EMOJI_B];
  var emojiArrayB = [EMOJI_B, EMOJI_A];
  var median = (dimension - 1) / 2;
  var rows = [];
  var output = "";

  // Create rows of the shape
  for (var rowCounter = 1; rowCounter <= dimension; rowCounter += 2) {
    var builderArray;
    if (median % 2 == 0) {
      builderArray = emojiArrayA.slice(0);
    } else {
      builderArray = emojiArrayB.slice(0);
    }
    var rowString = "";
    var row = [];

    // Create center of the row first
    row.push(builderArray[0].repeat(rowCounter));

    // Create rest of the row
    for (var buildCounter = 1; buildCounter <= median; buildCounter += 1) {
      // Add end emoji to the start and end of row
      row.push(builderArray[1]);
      row.unshift(builderArray[1]);

      // Swap emojis sequence in emoji array
      builderArray.swap(0, 1);
    }
    // Decrease the number of times emojis are added to the start and end of the rows
    median -= 1;

    // Combine emojis in the row array into a single string
    for (emoji of row) {
      rowString += emoji;
    }

    // Add the row string into the rows array
    // If it is the starting center row, then only once
    // Otherwise push and unshift the row
    if (rowCounter == 1) {
      rows.push(rowString);
    } else {
      rows.push(rowString);
      rows.unshift(rowString);
    }
  }

  // Create the shape by concatenating the rows together and adding line breaks
  for (let row of rows) {
    output += `${row}<br>`;
  }

  return output;
}

function buildEvenShape(dimension) {
  var emojiArrayA = [EMOJI_B, EMOJI_A];
  var emojiArrayB = [EMOJI_A, EMOJI_B];
  var median = (dimension - 1) / 2;
  var rows = [];
  var output = "";

  // Create rows of the shape
  for (var rowCounter = 1; rowCounter <= dimension; rowCounter += 2) {
    var builderArray;
    if (median % 2 == 1) {
      builderArray = emojiArrayA.slice(0);
    } else {
      builderArray = emojiArrayB.slice(0);
    }
    var rowString = "";
    var row = [];

    // Create center of the row first
    row.push(builderArray[0].repeat(rowCounter));

    // Create rest of the row
    for (var buildCounter = 1; buildCounter <= median; buildCounter += 1) {
      // Add end emoji to the start and end of row
      row.push(builderArray[1]);
      row.unshift(builderArray[1]);

      // Swap emojis sequence in emoji array
      builderArray.swap(0, 1);
    }
    // Decrease the number of times emojis are added to the start and end of the rows
    median -= 1;

    // Combine emojis in the row array into a single string
    for (emoji of row) {
      rowString += emoji;
    }

    // Add the row string into the rows array
    // If it is the starting center row, then only once
    // Otherwise push and unshift the row
    if (rowCounter == 1) {
      rows.push(rowString);
    } else {
      rows.push(rowString);
      rows.unshift(rowString);
    }
  }

  // Create the shape by concatenating the rows together and adding line breaks
  for (let row of rows) {
    output += `${row}<br>`;
  }

  return output;
}

/**
 * ------------------------------------------------------------------------
 * Reference Solution
 * ------------------------------------------------------------------------
 */

/*
var rings = function (input) {
  var myOutputValue = "";
  // sideLength represents the length of each side of the square
  var sideLength = Number(input);
  // Initialise 2D array to represent grid to print
  var grid = [];
  for (let i = 0; i < sideLength; i += 1) {
    // Push sideLength arrays of length sideLength into grid
    grid.push(Array(sideLength));
  }

  // Draw halfSideLengthIndex concentric circles in the grid, starting from the outside
  var halfSideLengthIndex = Math.floor(sideLength / 2);
  for (let i = 0; i < halfSideLengthIndex; i += 1) {
    var emoji = i % 2 == 0 ? EMOJI_A : EMOJI_B;
    // Fill top and bottom rows of square
    for (let j = i; j < sideLength - i; j += 1) {
      grid[i][j] = emoji;
      grid[sideLength - 1 - i][j] = emoji;
      console.table(grid);
    }
    // Fill sides of middle rows of square
    for (let j = i + 1; j < sideLength - 1 - i; j += 1) {
      grid[j][i] = emoji;
      grid[j][sideLength - 1 - i] = emoji;
      console.table(grid);
    }
  }

  // Add centre element if side length is odd
  if (sideLength % 2 == 1) {
    if (sideLength % 4 == 1) {
      grid[halfSideLengthIndex][halfSideLengthIndex] = EMOJI_A;
    } else if (sideLength % 4 == 3) {
      grid[halfSideLengthIndex][halfSideLengthIndex] = EMOJI_B;
    }
  }

  var outerCounter = 0;
  while (outerCounter < sideLength) {
    var innerCounter = 0;
    while (innerCounter < sideLength) {
      // Print the value in the relevant position in the array
      myOutputValue += grid[outerCounter][innerCounter];
      innerCounter += 1;
    }
    // Insert a line break to start a new row
    myOutputValue += "<br>";
    outerCounter += 1;
  }
  return myOutputValue;
};
// */

/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main(input) {
  var position = (input - 3) / 2;
  if (position % 2 == 1) {
    return buildOddShape(input);
  }
  return buildEvenShape(input);
  // */
  // return rings(input);
}
