var n=0;
var score = 0;
var totalTimer = 30;
var highscores = [];

$("#play").on("click", function () {
   $("#main-container").children().empty();

    //startTimer();
    callNextQuestion();

})

$("#highscores").on("click", function () {
    $("#main-container").addClass("hidden")
    $("#highscores-container").removeClass("hidden")
})

function startTimer() {

}

function callNextQuestion() {
    $("#main-header").text(questions[n].question)
    $("#main-buttons").empty();

    for (var i=0;i<4;i++) {

        var newButtons = $("<button>" + questions[n].choices[i] + "</button>");~
        newButtons.attr("class", "btn-purple rounded-3 border-0 fs-2 color-text w-50 align-self-center mb-3");
        $(newButtons).attr("value", i);

        $("#main-buttons").append(newButtons);

        newButtons.on("click", rightWrong);

    }
};

function rightWrong() {
    var userChoice = $(this).prop("value");

    if (userChoice === questions[n].correctChoice) {
        if (n===3) {
            console.log("Correct, last question. Count: " + score + " N= " +n);
            score++;
            n++;
            callHighscores();
        }
        else {
            n++;
            score++;
            console.log("Correct, next question please. Count: " + score + " N= " +n);
            callNextQuestion();
        }
    }
    else if (userChoice != questions[n].correctChoice) {
        if (n===3) {
            console.log("incorrect, last question. Count: " + score + " N= " +n);
            n++;
            callHighscores();
        }
        else {
            n++;
            console.log("Incorrect, next question please. Count: " + score + " N= " +n);
            callNextQuestion();
        }
    }
};

function callHighscores() {
    $("#question").hide();
    $("#timer").hide();
    $("#answer-buttons").empty();

}















const questions = [
    {
      question: "Where is the correct place to insert a JavaScript file?",
      choices: {
        0: "the body section",
        1: "the head section",
        2: "the html section", 
        3: "both body and head sections",
      },
      correctChoice: "0"
    },
    {
      question: "What is the correct syntax for referring to an external script called 'script.js'?",
      choices: {
        0: "script href='script.js'",
        1: "script src='script.js'",
        2: "link href='script.js'",
        3: "script name='script.js'",
      },
      correctChoice: "1"
    },
    {
      question: "How would you write 'Hello World' in the web console?",
      choices: {
        0: "msg('Hello World')",
        1: "console('Hello World')",
        2: "console.log('Hello World')",
        3: "log('Hello World')",
      },
      correctChoice: "2"
    },
    {
      question: "What is the proper way of writing an IF statement in JavaScript?",
      choices: {
        0: "if i==5 then",
        1: "if i = 5",
        2: "if (i==5)",
        3: "if i=5 then",
      },
      correctChoice: "2"
    },
  ];