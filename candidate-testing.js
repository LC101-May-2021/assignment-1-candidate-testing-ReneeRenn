const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //
// TODO 1.1a: Define candidateName // 

let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

//let questions = ["Whow was the first American Woman in space?", "True or False: 5 kilometer == 5000 meters?","(5+3)/2*10 = ?", "Given the array [8,'orbit', 'Trajectory', 45]. What entry is at index 2?", "What is the maximum crew size for the ISS?"];

//let answers = ["Sally Ride", true, 40, "Trajectory", 3];

let question = ("1) Who was the first American woman in space?\nYour Answer: ");
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions;
let correctAnswers;
let candidateAnswers;

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("What is your name? ");
console.log("Candidate Name:"+" "+ candidateName);

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as 
candidateAnswer = input.question(question);
console.log("Correct Answer: "+ correctAnswer);
console.log();


}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
let grade = (1/1) * 100;
if (candidateAnswer === "Sally Ride"){
  console.log("Your answer is correct");
} else {
  console.log("Your answer is incorrect");

}

  return grade;

}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Welcome to your evaluation quiz,"+" "+ candidateName);

  askQuestion();
  gradeQuiz(this.candidateAnswers);

}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};