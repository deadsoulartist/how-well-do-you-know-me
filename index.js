var readlineSync = require("readline-sync");

//asking user his/her name
var userName = readlineSync.question("Whats your name? ");
console.log(
  "Welcome " +
    userName +
    '! to "How well do you know Mudassir" \n --- Answer the 5 questions in Yes or No ---'
);

//data of highscores
var highScore = [
  {
    name: "Mudassir",
    score: 5,
  },
  {
    name: "Ahmed",
    score: 5,
  },
];

//score
var score = 0;

//function
function quiz(ques, ans) {
  var userAns = readlineSync.question(ques);
  if (userAns === ans) {
    console.log("Right!");
    score = score + 1;
  } else {
    console.log("Wrong!");
    score = score - 1;
  }

  console.log("Score: " + score);
  console.log("---------");
}

//array of objects
var ques = [
  {
    question: "Am i an alien? ",
    answer: "yes",
  },
  {
    question: "Do i belong to the Earth? ",
    answer: "no",
  },
  {
    question: "Do you like art? ",
    answer: "yes",
  },
  {
    question: "Do you know iam an artist? ",
    answer: "yes",
  },
  {
    question: "Did you follow me on IG @deadsoulartist? ",
    answer: "yes",
  },
  {
    question:
      "Do you think, I built this quiz just to shamelessly promote my IG? ",
    answer: "no",
  },
];

//for loop
for (var i = 0; i < ques.length; i++) {
  var currentQue = ques[i];
  quiz(currentQue.question, currentQue.answer);
}

if (score > 0) {
  console.log("You win, Score : " + score);
} else {
  console.log("You lost");
}

var newUser = {
  name: userName,
  score: score,
};
highScore.push(newUser);

for (var i = 0; i < highScore.length; i++) {
  var userScore = highScore[i];
  console.log("High Scores:" + userScore.name, userScore.score);
}
