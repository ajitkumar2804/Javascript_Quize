var readlineSync = require("readline-sync");

var score=0;
var userName = readlineSync.question("What is your name? ");

console.log("Hey Welcome To JAVASCRIPT QUIZE, Answer The Questions ")
console.log("welcome "+ userName);

function play(question,answer){
  var answer1 = readlineSync.question(question);

  if(answer1.toUpperCase()==answer.toUpperCase()){
    console.log("you are Right !!!");
    score++;
  }else{
    console.log("Wrong Answer ");
  }

console.log("Current score is "+score)
console.log("----------------------")
}

var questions = [{
   question: "Which type of JavaScript language is   ",
   answer :"Object Based"
},
{
  question: "The function and var are known as  ",
  answer:"Declaration statements"
},
{
  question:"Which function returns the value of the number  ",
  answer:"valueOf()"
},
{
  question:"Inside which HTML element do we put the JavaScript?  ",
  answer:"<script>"
},
{
  question:"The external JavaScript file must contain the <script> tag? True OR false ",
  answer : "false"
}];

for(var i=0;i<questions.length;i++){
  var currentQue = questions[i];
  play(currentQue.question,currentQue.answer);
  
}
console.log("Your Final Score is "+score);

