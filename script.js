// Done create a start game button
// button causes the first div to switch to a question and the 2nd div
// to switch to 4 buttons with answers 
// make these buttons flash an answer across bottom of screen and also change page
// probably store correct and wrong answers in a variable
// maybe by using if statements to keep track fo score
// last question should push to an enter score form
// score should be save in local storage on machine 
// score button should be accessible in the top right
// Create a timer that when it ends ends the game 
// need array of button text ie) answers that appear on button
var jumbotron = document.getElementById('bigHeader')
var answerSection = document.getElementById("answerArea");
var resultsCheck = document.getElementById("correctCheck")
var startButton = document.getElementById("start");

var question = document.getElementById('question')
var answer = document.querySelector(".choice");
// var answer2 = document.getElementById("answer2");
// var answer3 = document.getElementById("answer3");
// var answer4 = document.getElementById("answer4");


// Created an array that contains 5 question objects
// Question objects contain a question, options, and correct
var answersObject = [
    {
        question: "This is a test question",
        options: ["choice one", "choice two", "choice 3","choice 4"],
        correct: "choice two"
    },
    {
        question: "This is a different test question",
        options: ["choice one", "choice two", "choice 3","choice 4"],
        correct: "choice one"
    },
    {
        question: "This is a testier question",
        options: ["choice one", "choice two", "choice 3","choice 4"],
        correct: "choice four"
    },
    {
        question: "This is a testatic question",
        options: ["choice one", "choice two", "choice 3","choice 4"],
        correct: "choice two"
    },
    {
        question: "This is a testup question",
        options: ["choice one", "choice two", "choice 3","choice 4"],
        correct: "choice 3"
    }
]

var totalCorrect = 0
var questionNumber = 0
startButton.addEventListener("click", function(){
    event.preventDefault();
    // Clear out and hide jumbotron area
    jumbotron.style.display = 'none';
    // run a function to have the quiz start asking questions
    playQuestions()
})

function playQuestions(){
    question.textContent = answersObject[questionNumber].question
    for(var i=0 ; i < 4 ; i++){
        var text = document.createElement("button");
        text.textContent = answersObject[questionNumber].options[i]
        answer.appendChild(text)

        // answerObject[questionNumber].options[i]

    }
    answer.addEventListener("click", function(){
        jumbotron.style.display = 'block'
    })
}

// check if an answer was right function

function checkCorrect(userChose) {
    if (userChose === answer){
        totalCorrect ++
        resultsCheck.textContent = "That was a correct answer"

    }
    else{
        resultsCheck.textContent = "sorry that was a wrong answer"
    }   
}
