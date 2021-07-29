/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */
var EMOJI_A = "🟧";
var EMOJI_B = "🟡";

/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */

function selectStartEmoji(dimension) {
  var emojiSequence = [];
  var position = (dimension - 3) / 2;
  if (position % 2 == 1) {
    emojiSequence.push(EMOJI_A);
    emojiSequence.push(EMOJI_B);
    return emojiSequence;
  }
  emojiSequence.push(EMOJI_B);
  emojiSequence.push(EMOJI_A);
  return emojiSequence;
}

function buildShape(dimension) {
  var emojiArray = selectStartEmoji(dimension);
  var median = (dimension - 1) / 2;
  var rows = [];
  var output = "";

  // Create rows of the shape
  for (var rowCounter = 1; rowCounter <= dimension; rowCounter += 2) {
    var rowEmojis = emojiArray;
    var rowString = "";
    var row = [];

    // Create center of the row first
    row.push(rowEmojis[0].repeat(rowCounter));

    // Create rest of the row
    for (var colCounter = 1; colCounter <= median; colCounter += 1) {
      // Add end emoji to the start and end of row
      row.push(rowEmojis[1]);
      row.unshift(rowEmojis[1]);

      // Swap emojis sequence in emoji array
      rowEmojis.unshift(rowEmojis[1]);
      rowEmojis.pop();
    }
    // Decrease the number of times emojis are added to the start and end of the rows
    median -= 1;

    // Combine emojis in the row array into a single string
    for (emoji in row) {
      rowString += row[emoji];
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

    // Swap start and end emojis in main emoji array
    emojiArray.unshift(emojiArray[1]);
    emojiArray.pop();
  }

  // Create the shape by concatenating the rows together and adding line breaks
  for (row in rows) {
    output += `${rows[row]}<br>`;
  }

  return output;
}

/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main(input) {
  return buildShape(input);
}
