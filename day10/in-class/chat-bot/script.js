/**
 * ------------------------------------------------------------------------
 * Global Variables
 * ------------------------------------------------------------------------
 */

var questionId = "greeting";
var userName = "";
var age;

var qASets = {
  greeting: {
    question: "Hey there, I'm Robocop. What's your name?",
    answers: "What a cool name!",
    nextQuestionId: "userAge",
  },
  userAge: {
    question: "How old are you?",
    answers: {
      ageGroup1: "Make the best out of your youth!",
      ageGroup2: "Adulting is never easy, work hard, play hard!",
      ageGroup3: "What a wise age!",
    },
    nextQuestionId: "hasBeenCoding",
  },
  hasBeenCoding: {
    question: "Wow you seem happy today! Have you been coding? (yes/no/maybe)",
    answers: {
      yes: {
        response:
          "Wow! Me too! I've been working on the Blackjack project. Makes my day!",
        nextQuestionId: "timeOfDay",
      },
      no: {
        response: "Oh ok, just normally happy ;)",
        nextQuestionId: "happiness",
      },
      maybe: {
        response: "It seems the very thought of coding makes people happy!",
        nextQuestionId: "happiness",
      },
    },
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
  happiness: {
    question: "Do arrays or objects make you happier? (arrays/objects)",
    answers: {
      arrays: "I knew it, arrays are my favourite too.",
      objects: "You're good at coding- objects are hard!",
    },
    nextQuestionId: "timeOfDay",
  },
};

/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main(input) {
  if (input == "" && questionId == "greeting") {
    return qASets[questionId].question;
  }

  var nextQuestion = qASets[questionId].nextQuestionId;

  if (input != "" && questionId == "greeting") {
    userName = input;
    responseText = `Hey ${userName}! ${qASets[questionId].answers}<br><br>${qASets[nextQuestion].question}`;
    questionId = qASets[questionId].nextQuestionId;
    return responseText;
  }

  if (questionId == "userAge") {
    userAge = input;
    var ageGroup;
    if (input < 20) {
      ageGroup = "ageGroup1";
    }

    if (input >= 20 && input < 60) {
      ageGroup = "ageGroup2";
    }

    if (input >= 60) {
      ageGroup = "ageGroup3";
    }
    responseText = `Hey ${userName}! ${qASets[questionId].answers[ageGroup]}
    <br><br>${qASets[qASets[questionId].nextQuestionId].question}`;
    questionId = qASets[questionId].nextQuestionId;
    return responseText;
  }

  if (questionId == "hasBeenCoding") {
    var nestedQuestion = qASets[questionId].answers[input].nextQuestionId;
    responseText = `Hey ${userName}, ${qASets[questionId].answers[input].response}<br><br>${qASets[nestedQuestion].question}`;
    questionId = nestedQuestion;
    return responseText;
  }

  var responseText = `Hey ${userName}. ${qASets[questionId].answers[input]}<br><br>${qASets[nextQuestion].question}`;
  questionId = nextQuestion;
  return responseText;
}
