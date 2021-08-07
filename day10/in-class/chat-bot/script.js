/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Global Variables
 * ------------------------------------------------------------------------
 */

var questionId = "greeting";
var userName = "";
var userAge;

// var questionAndAnswerSets = [
//   {
//     question: "I'm Robocop. What's your name?",
//   },
//   {
//     answers: {
//       ageGroup1: "That's very young!",
//       ageGroup2: "Work hard, play hard!",
//       ageGroup3: "What a wise age!",
//     },
//   },
//   {
//     question: `wow you seem happy today! Have you been coding? (yes/no/maybe)`,
//     answers: {
//       yes: `Wow! Me too! I've been working on the Blackjack project. Makes my day!`,
//       no: "Oh ok, just normally happy ;)",
//       maybe: "It seems the very thought of coding makes people happy!",
//     },
//   },
//   {
//     question: `do you enjoy coding most during the day, night, or both? (day/night/both)`,
//     answers: {
//       day: "Ah yes, when the sun is high in the sky, I can feel its energy too.",
//       night: "Under the calm and gentle moon, I also find my focus.",
//       both: "Indeed, I could code 24/7 if I didn't have to sleep!",
//     },
//   },
// ];

var questionAndAnswerSets = {
  greeting: {
    question: "I'm Robocop. What's your name?",
    answers: {
      ageGroup1: "That's very young!",
      ageGroup2: "Work hard, play hard!",
      ageGroup3: "What a wise age!",
    },
    nextQuestionId: "hasBeenCoding",
  },
  hasBeenCoding: {
    question:
      "Hey, wow you seem happy today! Have you been coding? (yes/no/maybe)",
    answers: {
      yes: `Wow! Me too! I've been working on the Blackjack project. Makes my day!`,
      no: "Oh ok, just normally happy ;)",
      maybe: "It seems the very thought of coding makes people happy!",
    },
    nextQuestionId: "timeOfDay",
  },
  timeOfDay: {
    question:
      "Do you enjoy coding most during the day, night, or both? (day/night/both)",
    answers: {
      day: "Ah yes, when the sun is high in the sky, I can feel its energy too.",
      night: "Under the calm and gentle moon, I also find my focus.",
      both: "Indeed, I could code 24/7 if I didn't have to sleep!",
    },
    nextQuestionId: "weather",
  },
  weather: {
    question: "Are you most productive when it's sunny or raining? (sun/rain)",
    answers: {
      sun: "The sun warms my heart and powers me to code.",
      rain: "The rain washes away my distractions and allows me to focus.",
    },
    nextQuestionId: "hasBeenCoding",
  },
};

/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main(input) {
  if (input != "" && questionId == "greeting") {
    userName = input;
    questionId = "hasBeenCoding";
    return `${userName}! what a cool name. How old are you?`;
  }

  if (input == "") {
    return `${questionAndAnswerSets[questionId].question}`;
  }

  var nextQuestion = questionAndAnswerSets[questionId].nextQuestionId;
  var responseText = `Hey ${userName}, ${questionAndAnswerSets[questionId]["answers"][input]}<br><br>${questionAndAnswerSets[nextQuestion].question}`;

  if (questionId == "hasBeenCoding") {
    userAge = input;
    if (input < 20) {
      responseText = `${questionAndAnswerSets.greeting.answers.ageGroup1}<br><br>${questionAndAnswerSets[nextQuestion].question}`;
    }

    if (input >= 20 && input < 60) {
      responseText = `${questionAndAnswerSets.greeting.answers.ageGroup2}<br><br>${questionAndAnswerSets[nextQuestion].question}`;
    }

    if (input >= 60) {
      responseText = `${questionAndAnswerSets.greeting.answers.ageGroup3}<br><br>${questionAndAnswerSets[nextQuestion].question}`;
    }
  }

  questionId = questionAndAnswerSets[questionId].nextQuestionId;

  return responseText;
}
