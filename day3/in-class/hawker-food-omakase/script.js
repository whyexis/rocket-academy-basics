/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var CHICKEN_RICE = "chicken rice";
var NASI_LEMAK = "nasi lemak";
var BAK_KUT_TEH = "bak kut teh";
var HOKKIEN_MEE = "hokkien mee";
var LAKSA = "laksa";
var BEEF_HOR_FUN = "beef hor fun";
var ROTI_PRATA = "roti prata";

/**
 * ------------------------------------------------------------------------
 * Global Variables
 * ------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */

function getRiceDish() {
  var randomDecimal = Math.random() * 4;
  var randomInteger = Math.floor(randomDecimal);
  switch (randomInteger) {
    case 0:
      return CHICKEN_RICE;
    case 1:
      return NASI_LEMAK;
    case 2:
      return BAK_KUT_TEH;
    case 3:
      return ROTI_PRATA;
  }
}

function getNoodleDish() {
  var randomDecimal = Math.random() * 4;
  var randomInteger = Math.floor(randomDecimal);
  switch (randomInteger) {
    case 0:
      return HOKKIEN_MEE;
    case 1:
      return LAKSA;
    case 2:
      return BEEF_HOR_FUN;
    case 3:
      return ROTI_PRATA;
  }
}

function getDishDescription(dish) {
  switch (dish) {
    case CHICKEN_RICE:
      return "Chicken rice, succulent poached chicken and seasoned rice, served with chilli sauce, cucumber garnishes and peanut soup.";
    case NASI_LEMAK:
      return "Nasi Lemak, a fragrant coconut rice. Accompanied by Korean-style fried chicken wing, organic ikan bilis and free-range egg.";
    case BAK_KUT_TEH:
      return "Bak Kut Teh, a simmered pork rib broth with fatty pork rib. Accompanied by braised peanuts, you tiao crullers and freshly-blanched cai xin.";
    case HOKKIEN_MEE:
      return "Hokkien mee, yellow noodles and thick vermicelli with a healthy mix of juicy prawns, squid, pork belly strips, egg and crunchy fried pork lard that makes everything taste extra good.";
    case LAKSA:
      return "Curry laksa, thick wheat noodles that comes with a hard-boiled egg, deep-fried tofu, crunchy beansprouts, and fresh cockles.";
    case BEEF_HOR_FUN:
      return "Beef hor fun, soft, flat rice noodles on a bed of gloriously, silky and thick sauce topped with generous slices of beef.";
    case ROTI_PRATA:
      return "Roti prata, a fried flatbread that is cooked to perfection over a flat grilling pan and paired with a vegetable-based curry.";
  }
}

function getSambal(dish1, dish2) {
  if (
    dish1 == NASI_LEMAK ||
    dish1 == HOKKIEN_MEE ||
    dish1 == LAKSA ||
    dish2 == NASI_LEMAK ||
    dish2 == HOKKIEN_MEE ||
    dish2 == LAKSA
  ) {
    return "Chilli sambal will be included.";
  }
  return "";
}

function generateOutputMessage(dish1, dish2) {
  var message = "Uncle has prepared a selection of dishes for you!<br><br>";
  message += `${getDishDescription(dish1)}<br><br>`;
  message += `${getDishDescription(dish2)}<br><br>`;
  message += getSambal(dish1, dish2);
  return message;
}

/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main(input) {
  var randomDish1;
  var randomDish2;

  if (input != "rice" && input != "noodle") {
    return `Please enter "rice" or "noodle".`;
  }

  if (input == "rice") {
    randomDish1 = getRiceDish();
    randomDish2 = getRiceDish();

    while (randomDish2 == randomDish1) {
      randomDish2 = getRiceDish();
    }
  }

  if (input == "noodle") {
    randomDish1 = getNoodleDish();
    randomDish2 = getNoodleDish();

    while (randomDish2 == randomDish1) {
      randomDish2 = getNoodleDish();
    }
  }

  return generateOutputMessage(randomDish1, randomDish2);
}
