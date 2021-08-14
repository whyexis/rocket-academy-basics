/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const INPUT = "input";
const INPUT_EXCLAMATION = "inputExclamation";
const INPUT_ADVERB = "inputAdverb";
const INPUT_NOUN = "inputNoun";
const INPUT_ADJECTIVE = "inputAdjective";
const CREATE = "create";
const OPENING = "<b><u>";
const CLOSING = "</u></b>";

/**
 * ------------------------------------------------------------------------
 * Global Variables
 * ------------------------------------------------------------------------
 */

const exclamationArray = [
  "Yabadabadoo!",
  "cool",
  "huh",
  "great",
  "ouch",
  "wow",
  "aww",
  "KABOOM",
  "ahem",
  "bah",
  "BINGO",
  "boo",
  "booyah",
  "bravo",
  "dang",
  "cheers",
  "finally",
  "ha",
  "jeez",
  "kapow",
  "nah",
  "ow",
  "yippee",
  "yummy",
];
const adverbArray = [
  "gleefully",
  "happily",
  "quickly",
  "excitedly",
  "slowly",
  "sadly",
  "angrily",
  "elegantly",
  "awkwardly",
  "obnoxiously",
  "hungrily",
  "bitterly",
  "blindly",
  "calmly",
  "cheerfully",
];
const nounArray = [
  "Tree Car",
  "papaya",
  "banana",
  "pokemon",
  "bicycle",
  "elephant",
  "car",
  "table",
  "artist",
  "ring",
  "manager",
];
const adjectiveArray = [
  "green",
  "nice",
  "silly",
  "beautiful",
  "ugly",
  "tired",
  "sunny",
  "gross",
  "messy",
  "long",
  "short",
  "tidy",
  "interesting",
  "rare",
  "basic",
  "fantastic",
  "terrible",
  "scary",
  "tall",
];

var gameMode = INPUT_EXCLAMATION;

/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */

function getRandomElement(array) {
  let randomDecimal = Math.random() * array.length;
  let randomInteger = Math.floor(randomDecimal);
  return array[randomInteger];
}

function pushWords(words, wordsArray) {
  for (let word in words) {
    wordsArray.push(word);
  }
}

function saveWords(input) {
  words = input.split(" ");
  switch (gameMode) {
    case INPUT_EXCLAMATION:
      pushWords(words, exclamationArray);
      return `The exclamation(s) "${words.join(", ")}" has been saved.`;
    case INPUT_ADVERB:
      pushWords(words, adverbArray);
      return `The adverb(s) "${words.join(", ")}" has been saved.`;
    case INPUT_NOUN:
      pushWords(words, nounArray);
      return `The noun(s) "${words.join(", ")}" has been saved.`;
    case INPUT_ADJECTIVE:
      pushWords(words, adjectiveArray);
      return `The adjective(s) "${words.join(", ")}" has been saved.`;
  }
}

function highlightWord(word) {
  return `${OPENING}${word}${CLOSING}`;
}

function generateMadLib() {
  let randomExclaim1 = getRandomElement(exclamationArray);
  let randomExclaim2 = getRandomElement(exclamationArray);
  let randomAdverb1 = getRandomElement(adverbArray);
  let randomNoun1 = getRandomElement(nounArray);
  let randomNoun2 = getRandomElement(nounArray);
  let randomAdj1 = getRandomElement(adjectiveArray);
  let randomAdj2 = getRandomElement(adjectiveArray);

  const madLibs = [
    `She asked ${highlightWord(randomAdverb1)} for the ${highlightWord(
      randomNoun1
    )} and when they were rude, she said ${highlightWord(
      randomExclaim1
    )} and hung up the ${highlightWord(randomAdj1)} phone.`,
    `"${highlightWord(randomExclaim2)}", he said ${highlightWord(
      randomAdverb1
    )} as he jumped into his convertible ${highlightWord(
      randomNoun1
    )} and drove off with his ${highlightWord(randomAdj1)} wife.`,
    `After hiding the painting in his ${highlightWord(
      randomNoun1
    )} for two years, he grew ${highlightWord(
      randomAdj1
    )} and tried to sell it to a/an ${highlightWord(
      randomNoun2
    )} in Florence, but was caught.`,
    `To make a sandwich, spread ${highlightWord(
      randomNoun1
    )} on the bread, then add some ${highlightWord(
      randomNoun2
    )} ${highlightWord(randomAdverb1)}. The sandwich is ${highlightWord(
      randomAdj1
    )}.`,
    `It was a ${highlightWord(
      randomAdj1
    )}, cold November day. I woke up to the ${highlightWord(
      randomAdj2
    )} smell of ${highlightWord(randomNoun1)} roasting in the ${highlightWord(
      randomNoun2
    )} downstairs.`,
  ];
  return getRandomElement(madLibs);
}
/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main(input) {
  if (String(input).toLowerCase() == CREATE) {
    gameMode = CREATE;
  }

  if (String(input).toLowerCase() == INPUT) {
    gameMode = INPUT_EXCLAMATION;
    return `The game mode is now in input mode.<br>
    Enter some exclamations separated by spaces.<br>
    Example: "ouch wow aww"<br><br>
    Or enter "create" to see a Mad Lib.`;
  }

  if (gameMode == INPUT_EXCLAMATION) {
    let feedback = saveWords(input);
    gameMode = INPUT_ADVERB;
    return `${feedback}<br><br>
    Now, enter some adverbs, separated by spaces.<br>
    Example: "quickly happily excitedly"`;
  }

  if (gameMode == INPUT_ADVERB) {
    let feedback = saveWords(input);
    gameMode = INPUT_NOUN;
    return `${feedback}<br><br>
    Now, enter some nouns, separated by spaces.<br>
    Example: "elephant car table"`;
  }

  if (gameMode == INPUT_NOUN) {
    let feedback = saveWords(input);
    gameMode = INPUT_ADJECTIVE;
    return `${feedback}<br><br>
    Now, enter some adjectives, separated by spaces.<br>
    Example: "beautiful ugly tired"`;
  }

  if (gameMode == INPUT_ADJECTIVE) {
    let feedback = saveWords(input);
    gameMode = CREATE;
    return `${feedback}<br><br>
    Here is a random Mad Lib.<br>
    ${getRandomElement(madLibs)}<br><br>
    Enter "create" to see another MadLib or "input" to enter more words.`;
  }

  return `${generateMadLib()}<br><br>
  Enter "create" to see another MadLib or "input" to enter more words.`;
}
