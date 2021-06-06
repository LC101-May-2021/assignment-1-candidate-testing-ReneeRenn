const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //
// TODO 1.1a: Define candidateName // 

let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer 

let questions = ["1) Who was the first American woman in space? " ,  "2) True or False: 5 kilometer == 5000 meters? " , "3) (5+3)/2*10 = ? " , "4) Given the array [8,'orbit', 'Trajectory', 45]. What entry is at index 2? " , "5) What is the maximum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswer = "";
let question = "Who was the first American woman is space?";
let correctAnswer = "Sally Ride";
let candidateAnswers = [];
let numOfCorrectAnswers = 0;

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name? ");
  console.log("Candidate Name:"+" "+ candidateName);
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as 
  
  for (let i = 0; i < questions.length; i++){ 
    candidateAnswer = input.question(questions[i]);
    candidateAnswers.push(candidateAnswer);
    /*console.log("Your Answer: "+ candidateAnswers[i]);
    console.log("Correct Answer: "+ correctAnswers[i]+ "\n");*/
    //console.log(candidateAnswers);
  }
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  
  console.log("\n" + "Candidate Name: " + candidateName + "\n");
  let grade = 0;

  for (let i = 0; i < questions.length; i++){
    
    if(candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      numOfCorrectAnswers ++;

    } 
    console.log(questions[i]);
    console.log("Your Answer: "+ candidateAnswers[i]);
    console.log("Correct Answer: "+ correctAnswers[i]+ "\n");
  }
      grade = (numOfCorrectAnswers / questions.length) * 100;
      //console.log(grade);
    
  
    if (grade < 80) {
      console.log(">>> STATUS:FAILED <<<");
    } else {
      console.log(">>> STATUS:PASSED <<<");
    }
      console.log(`>>> Overall Grade: ${grade}% (${numOfCorrectAnswers} out of 5 responses correct) <<<`);
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Welcome to your evaluation quiz,"+" "+ candidateName);
  console.log();

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