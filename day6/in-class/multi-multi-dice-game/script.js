/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const numOfRounds = 4;
const colourPlayer = "#1357BE";
const colourWin = "#044904";
const colourLoss = "#800000";

/**
 * ------------------------------------------------------------------------
 * Global Variables
 * ------------------------------------------------------------------------
 */

var numOfPlayers = 2;
var playersRecords = [];

/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */

function rollDice() {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
}

function setupGame(players) {
  for (var playerCounter = 1; playerCounter <= players; playerCounter += 1) {
    playersRecords.push({
      id: playerCounter,
      wins: 0,
      losses: 0,
    });
  }
}

function validateInput(players, guesses) {
  for (let guess of guesses) {
    if (isNaN(Number(guess))) {
      return `Please enter only valid inputs, i.e. a number from 1 to 6.`;
    }
  }

  if (players < guesses.length) {
    return `You entered too many guesses.
    There are ${players} players, but ${guesses.length} guesses.`;
  }

  if (players > guesses.length) {
    return `There are not enough guesses.
    There are ${players} players, but only ${guesses.length} guesses.`;
  }
}

function playGame(player, dice, guess) {
  var output = `You rolled ${dice} dice for each round and guessed ${guess} for every dice roll.<br><br>`;

  for (var roundCounter = 1; roundCounter <= numOfRounds; roundCounter += 1) {
    var diceRolls = [];
    for (var diceCounter = 0; diceCounter < dice; diceCounter += 1) {
      diceRolls.push(rollDice());
    }

    var colour = "";
    var result = "";

    if (diceRolls.includes(Number(guess))) {
      player.wins += 1;
      colour = colourWin;
      result = `Your guess matched one of the rolls. Congrats!`;
    } else {
      player.losses += 1;
      colour = colourLoss;
      result = `Your guess did not match any of the rolls. Better luck next time.`;
    }
    output += `<div style="border-radius:5px; background-color:${colour}; padding: 0.25em 2em;"><b><u>Round ${roundCounter}</b></u></div>
    You rolled: ${diceRolls.toString().replaceAll(",", ", ")}<br>${result}`;
  }
  output += `<br><br>Your current score after ${
    player.wins + player.losses
  } rounds: ${player.wins} wins and ${player.losses} losses.<br><br>`;
  return output;
}

function playMultiplayer(dice, guesses) {
  var mainOutput = "";
  for (
    var playerCounter = 0;
    playerCounter < numOfPlayers;
    playerCounter += 1
  ) {
    mainOutput += `<div style="border-radius:5px; background-color:${colourPlayer}; padding: 0.25em 2em;"><b><u>Player ${
      playerCounter + 1
    }</b></u></div><br>`;
    mainOutput += playGame(
      playersRecords[playerCounter],
      dice,
      guesses[playerCounter]
    );
  }
  return mainOutput;
}
/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main(players, dice, guesses) {
  if (players != numOfPlayers) {
    numOfPlayers = players;
    playersRecords = [];
    setupGame(players);
  }
  var guessArray = guesses.split(",");

  if (validateInput(players, guessArray) != undefined) {
    return validateInput(players, guessArray);
  }

  return playMultiplayer(dice, guessArray);
}
