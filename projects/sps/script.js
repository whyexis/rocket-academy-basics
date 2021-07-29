/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var WIN = "win";
var LOSE = "lose";
var DRAW = "draw";
var NORMAL = "normal";
var REVERSED = "reversed";
var KOREAN = "korean";
var COMPUTER = "Computer";
var WORD = "word";
var SECRET = "diamond";
var DICE = "dice";
var NOBODY = "Nobody";

/**
 * ------------------------------------------------------------------------
 * Global Variables
 * ------------------------------------------------------------------------
 */

var userName = "Player";
var result;
var userWins = 0;
var computerWins = 0;
var draws = 0;
var lastWinner = NOBODY;
const wordGameHints = [
  "It is a gem.",
  "It is very very hard.",
  "It is precious.",
  "It is shiny.",
];
var revealedHints = "";

/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Computer returns a random number that represents a shape.
 * [1] Scissors
 * [2] Paper
 * [3] Stone
 * @return  {Number}   The number representing a shape.
 * ------------------------------------------------------------------------
 */
function getComputerShape() {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
}

/**
 * ------------------------------------------------------------------------
 * Returns an emoji based on the number.
 * [1] Scissors
 * [2] Paper
 * [3] Stone
 * @param   {Number}  shape  The number representing a shape.
 * @return  {String}         The emoji.
 * ------------------------------------------------------------------------
 */
function getEmoji(shape) {
  switch (shape) {
    case 1:
      return "✂";
    case 2:
      return "📄";
    case 3:
      return "⛰";
  }
}

/**
 * ------------------------------------------------------------------------
 * Modulus Function because the % operator in JavaScript only returns remainder.
 * @param   {Number}  number  The number to undergo modulus.
 * @param   {Number}  modulus The modulus
 * @return  {Number}          The number after going through modulus.
 * ------------------------------------------------------------------------
 */
function mod(number, modulus) {
  var remainder = number % modulus;
  return Math.floor(remainder >= 0 ? remainder : remainder + modulus);
}

/**
 * ------------------------------------------------------------------------
 * The logic for Scissors Paper Stone is isomorphic to modular arithmetic.
 * Subtract the number chosen by the user from the number chosen by computer, and then take the difference modulo 3.
 * The user wins if the difference is one.
 * The comuters wins if the difference is two.
 * If the difference is zero, the game is a tie.
 * Tracks the score of the user.
 * @param   {Number}  userShape     The shape chosen by the user.
 * @param   {Number}  computerShape The shape chosen by the computer.
 * @return  {String}                The outcome for the user.
 * ------------------------------------------------------------------------
 */
function playNormalSPS(userShape, computerShape) {
  var difference = mod(Number(computerShape) - Number(userShape), 3);
  switch (difference) {
    case 0:
      draws += 1;
      return DRAW;
    case 1:
      userWins += 1;
      return WIN;
    case 2:
      computerWins += 1;
      return LOSE;
  }
}

// Reversed SPS Logic
function playReversedSPS(userShape, computerShape) {
  var difference = mod(Number(computerShape) - Number(userShape), 3);
  switch (difference) {
    case 0:
      draws += 1;
      return DRAW;
    case 1:
      computerWins += 1;
      return LOSE;
    case 2:
      userWins += 1;
      return WIN;
  }
}

/**
 * ------------------------------------------------------------------------
 * This SPS function is for Korean SPS.
 * @param   {Number}  userShape     The shape chosen by the user.
 * @param   {Number}  computerShape The shape chosen by the computer.
 * @return  {String}                The outcome for the user.
 * ------------------------------------------------------------------------
 */
function playSPS(userShape, computerShape) {
  var difference = mod(Number(computerShape) - Number(userShape), 3);
  switch (difference) {
    case 0:
      return DRAW;
    case 1:
      return WIN;
    case 2:
      return LOSE;
  }
}

/**
 * ------------------------------------------------------------------------
 * Calls the playSPS function to determine whether the player or computer got the advantage.
 * Sets the last winner to the player that won.
 * The player with the advantage win when there is a draw.
 * @param   {Number}  userShape     The shape chosen by the user.
 * @param   {Number}  computerShape The shape chosen by the computer.
 * @return  {String}                The outcome for the user.
 * ------------------------------------------------------------------------
 */
function playKoreanSPS(userShape, computerShape) {
  switch (playSPS(userShape, computerShape)) {
    case WIN:
      lastWinner = userName;
      return KOREAN;
    case LOSE:
      lastWinner = COMPUTER;
      return KOREAN;
    // Checks if a player is the last winner, if not play continues. After a win, resets the last winner.
    case DRAW:
      if (lastWinner == userName) {
        userWins += 1;
        lastWinner = NOBODY;
        return WIN;
      }
      if (lastWinner == COMPUTER) {
        computerWins += 1;
        lastWinner = NOBODY;
        return LOSE;
      } else {
        return KOREAN;
      }
  }
}

/**
 * ------------------------------------------------------------------------
 * Guess Secret Word Game.
 * Gives out up to 4 hints after each wrong guess of the word.
 * @param   {String}  input     The user's guess for the secret word.
 * @return  {String}            The hints if wrong and outcome for the user.
 * ------------------------------------------------------------------------
 */
function playSecretWord(input) {
  // Converts text input to lowercase
  input = String(input).toLowerCase();

  if (input == SECRET) {
    return "You got the secret word! Shining bright like a diamond! 💎";
  }
  var message = `You guessed ${input}. That's not quite right. This might help:<br>`;
  if (wordGameHints.length > 0) {
    revealedHints += `&bull; ${wordGameHints.pop()}<br>`;
  }
  message += `${revealedHints}`;
  if (wordGameHints.length == 0) {
    message += `That's all the hints, all the best!<br>`;
  }
  message += `Don't give up!`;
  return message;
}

// Die Roll
function rollDie() {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var dieNumber = randomInteger + 1;
  return dieNumber;
}

// Guess the Die Roll Game
function playDiceGame(guess) {
  // Input validation for the user guess, has to be an integer from 1 to 6 inclusive.
  if (!(guess >= 1 && guess <= 6)) {
    return "Please enter an integer from 1 to 6.";
  }

  var dieRoll = rollDie();
  var message = `You rolled ${dieRoll} and guessed ${guess}.<br>`;
  if (guess == dieRoll) {
    message += `You got it!`;
  } else {
    message += "May the roll be in your favour next time!";
  }
  return message;
}

/**
 * ------------------------------------------------------------------------
 * Output Message Generator for Scissors Paper Stone.
 * @param   {Number}  userShape     The shape chosen by the user.
 * @param   {Number}  computerShape The shape chosen by the computer.
 * @param   {Number}  totalPlays    The total number of plays.
 * @return  {String}                The outcome for the user.
 * ------------------------------------------------------------------------
 */
function generateOutputMessage(userShape, computerShape, totalPlays) {
  var message = `&#x1F476 VS &#x1F916 <br>`;
  message += `${getEmoji(userShape)} VS ${getEmoji(computerShape)}<br>`;

  // Add on the relevant output message depending on the outcome
  switch (result) {
    case WIN:
      message += `${userName} won! Congrats! &#x1F389`;
      break;
    case LOSE:
      message += `${userName} lost! Better luck next time! &#x1F340`;
      break;
    case DRAW:
      message += `It's a draw! What are the odds!? &#x1F914`;
      break;
    case KOREAN:
      if (lastWinner == NOBODY) {
        message += `${NOBODY} has the advantage at the moment, only time will tell.`;
      } else {
        message += `${lastWinner} has the advantage and needs a draw in the next round to win!`;
      }
  }
  message += `<br>${userName}'s score so far:<br>Out of ${totalPlays} rounds, ${userWins} wins, ${computerWins} losses, ${draws} draws.<br>`;
  message += `Choose a version and shape to play another round!&#x1F648`;
  return message;
}

/**
 * ------------------------------------------------------------------------
 * Main
 * @param   {String}  name      The user name.
 * @param   {String}  mode      The game chosen by the user.
 * @param   {Number}  choice    The choice for Scissors Paper Stone.
 * @param   {String}  input     Guess for Secret Word or Dice Roll.
 * @return  {String}            The outcome.
 * ------------------------------------------------------------------------
 */

function main(name, mode, choice, input) {
  // Set user name if the input is not blank, otherwise use the default value "Player"
  if (name != "") {
    userName = name;
  }

  // Resets last winner for Korean SPS for interim wins
  if (mode != KOREAN) {
    lastWinner = NOBODY;
  }

  // Set computer and user choices
  var computerShape = getComputerShape();
  var userShape = Number(choice);

  // Game play depending on mode selected
  switch (mode) {
    case NORMAL:
      result = playNormalSPS(userShape, computerShape);
      break;
    case REVERSED:
      result = playReversedSPS(userShape, computerShape);
      break;
    case KOREAN:
      result = playKoreanSPS(userShape, computerShape);
      break;
    case COMPUTER:
      userShape = getComputerShape();
      result = playNormalSPS(userShape, computerShape);
      break;
    case WORD:
      return playSecretWord(input);
    case DICE:
      return playDiceGame(input);
  }

  // Calculate total number of plays
  var totalPlays = Number(userWins) + Number(computerWins) + Number(draws);

  return generateOutputMessage(userShape, computerShape, totalPlays);
}
