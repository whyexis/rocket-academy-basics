/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var CHICKEN_RICE = "chicken rice";
var ROTI_PRATA = "roti prata";
var NASI_LEMAK = "nasi lemak";
var HOKKIEN_MEE = "hokkien mee";
var BAK_KUT_TEH = "bak kut teh";
var LAKSA = "laksa";

/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */

function getRandomDish() {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  switch (randomInteger) {
    case 0:
      return CHICKEN_RICE;
    case 1:
      return ROTI_PRATA;
    case 2:
      return NASI_LEMAK;
    case 3:
      return HOKKIEN_MEE;
    case 4:
      return BAK_KUT_TEH;
    case 5:
      return LAKSA;
  }
}

/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main(input) {
  var randomDish = getRandomDish();
  var output = `You guessed ${input}, but Uncle is cooking ${randomDish}, you have to pay for your meal.`;
  if (input == randomDish) {
    output = `You guessed ${input} and Uncle is cooking ${randomDish}, you get a free meal!`;
  } else {
    return "Please choose a dish."
  }
  return output;
}
