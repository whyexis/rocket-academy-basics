/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

 const numOfRounds = 4;
 const colourWin = "#044904";
 const colourLoss = "#800000";
 
 /**
  * ------------------------------------------------------------------------
  * Global Variables
  * ------------------------------------------------------------------------
  */
 
 var diceRolls = [];
 var numOfWins = 0;
 var numOfLosses = 0;
 
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
 
 function playGame(dice, guess) {
   var output = `You rolled ${dice} dice for each round and guessed ${guess} for every dice roll.<br><br>`;
 
   for (var roundCounter = 1; roundCounter <= numOfRounds; roundCounter += 1) {
     for (var diceCounter = 0; diceCounter < dice; diceCounter += 1) {
       diceRolls.push(rollDice());
     }
 
     var colour = "";
     var result = "";
 
     if (diceRolls.includes(Number(guess))) {
       numOfWins += 1;
       colour = colourWin;
       result = `Your guess matched one of the rolls. Congrats!`;
     } else {
       numOfLosses += 1;
       colour = colourLoss;
       result = `Your guess did not match any of the rolls. Better luck next time.`;
     }
     output += `<div style="border-radius:5px; background-color:${colour}; padding: 0.25em 2em;"><b><u>Round ${roundCounter}</b></u></div>
     You rolled: ${diceRolls.toString().replaceAll(",", ", ")}<br>${result}`;
 
     diceRolls = [];
   }
   output += `<br><br>Your current score after ${
     numOfWins + numOfLosses
   } rounds: ${numOfWins} wins and ${numOfLosses} losses.`;
   return output;
 }
 /**
  * ------------------------------------------------------------------------
  * Main
  * ------------------------------------------------------------------------
  */
 
 function main(dice, guess) {
   return playGame(dice, guess);
 }