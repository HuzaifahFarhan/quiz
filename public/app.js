var question = [
  {
    question:
      "Html Stands For ________________________________________________________________________________________________________________________________________________________________________________",
    options: [
      "Hyper Text Makeup Language",
      "html",
      "Case Cading Style Sheet",
      "Hypertext markup language",
    ],
    correctAns: "Hypertext markup language",
  },
  {
    question: "Css Stands For _______________________",
    options: [
      "Casecading Style Sheet",
      "Java",
      "Ram",
      "Hypertext markup language",
    ],
    correctAns: "Casecading Style Sheet",
  },
  {
    question: "Js Stands For _______________________",
    options: ["Java Style", "Java Script", "Script", "Script Src"],
    correctAns: "Java Script",
  },
  {
    question: "Dom Stands For _______________________",
    options: ["Document Object Model", "html", "Css", "Java"],
    correctAns: "Document Object Model",
  },
  {
    question: "Ram Stands For _______________________",
    options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
    correctAns: "Random Acccess Memory",
  },
  {
    question: "Rom Stands For _______________________",
    options: ["Hyper Text Markup Language", "html", "HTml", "Read Only Memory"],
    correctAns: "Read Only Memory",
  },
];

var currentIndex = 0;
var displayqno = document.getElementById("displayqno");
var totalQuestion = document.getElementById("totalQuestion")
var questions = document.getElementById("questions")
// var nextquestion = document.getElementById("nextquestion")
var optionss = document.getElementsByClassName("optionss")
function init(a) {
  displayqno.innerHTML = currentIndex + 1;
  totalQuestion.innerHTML = question.length;
  questions.innerHTML = question[a].question;
  for(var i = 0; i<optionss.length; i++){
    optionss[i].innerHTML = question[a].options[i];
  }
}
function next(){
  currentIndex++;
  
  init(currentIndex);
  }

// init()