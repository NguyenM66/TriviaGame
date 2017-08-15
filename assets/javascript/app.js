//objects 
var questions = {
	1: {
		question: "What does the Fox say?",
		options: ["Moo", "Woof", "Hi", "RingDing"],
		answer: 3,
		image: "",
	},
	2: {
		question: "What does the Dog say?",
		options: ["Moo", "Woof", "Hi", "RingDing"],
		answer: 1,
		image: "",
	},
	3: {
		question: "What does the Cow say?",
		options: ["Moo", "Woof", "Hi", "RingDing"],
		answer: 0,
		image: "",
	},
	4: {
		question: "What does the Human say?",
		options: ["Moo", "Woof", "Hi", "RingDing"],
		answer: 2,
		image: "",
	},
}

//varibles
var ranNum = Math.floor(Math.random() * 4) + 1;
var ranObject = questions[ranNum];
var ranQuestion = ranObject.question;
var ranQuesAnsInd = ranObject.answer; //index of answer
var ranQuesAnsStr = ranObject.options[ranQuesAnsInd]; //string of answer
var ranQuesOp = ranObject.options //list of options
var ranQuesImg = ranObject.image;
var optionId = 0;
var unansQuesArray = [];
var ansQuesArray = [];
var win = 0;
var loss = 0;
var showAnsDet;
var state = "beforeGame";

console.log("first", questions[1].question + " " + questions[1].options);
console.log("first", ranObject);
console.log("first", ranQuestion);
console.log("first", ranQuesOp);
console.log("first", ranQuesAnsInd);
console.log("first", ranQuesAnsStr);
console.log("first", ranQuesImg);
//functions

//state BeforeGame:
	//start button to start game
	function beforeGame(){
		var startBtn = $("<button>");
		$(startBtn).attr("id", "start");
		$(startBtn).addClass("btn btn-danger number");
		$(startBtn).attr("value", "start");
		$(startBtn).html("<h3>START!</h3>");
		$("#startSec").append(startBtn);
		console.log("start");
		$("#start").on("click", function(){
		inGame(); // changes state of game to inGame after onClick
		});
	}

//state InGame:
	function inGame(){
		state = "inGame";
		$("#start").remove();

		questionGen();

		}

	//questionGen
	//generates the same question again need to randomize
	function questionGen() {
	//diplay random timer & questions
		var question = $("<h3>");
		$(question).attr("id", "question");
		$(question).html(ranQuestion);
		$("#questionSec").append(question);
		//display question and choices		
		for (var i=0; i < ranQuesOp.length; i++) {
			var option = $("<p>");
			$(option).attr("id", i);
			$(option).addClass("option");
			$(option).text(ranQuesOp[i]);
			$("#questionSec").append(option);
		}

		//choices are on clicks
		$(".option" ).on("click", function() {
			optionId = $(this).attr("id");
			console.log(optionId);

			//if onclick is true then correct
			if (optionId == ranQuesAnsInd) {
				$("#question").remove();
				$(".option").remove();
				//display correct for 3 seconds then new question
				correct();
				setTimeout(nextQuestionGen, 3000);//calls next question after 3sec
				win++;

			}
			//if onclick is false then wrong
			else {
				$("#question").remove();
				$(".option").remove();
				//display wrong for 3 seconds then new question
				wrong();
				setTimeout(nextQuestionGen, 3000);//calls next question after 3sec
				loss++;
			}
			//if timout == 0 then unanswered

		});

		//inGame();
	}

		function nextQuestionGen() {
	// remove previous answer from screen
		$("#correct").remove();
		$("#wrong").remove();
		$("#question").remove();
		$(".option").remove();
		ranNum = Math.floor(Math.random() * 4) + 1;
		ranObject = questions[ranNum];
		ranQuestion = ranObject.question;
		ranQuesAnsInd = ranObject.answer; //index of answer
		ranQuesAnsStr = ranObject.options[ranQuesAnsInd]; //string of answer
		ranQuesOp = ranObject.options //list of options
		ranQuesImg = ranObject.image;
		//ansQuesArray.push(ranObject);
		//ansQuesArray.push();


		console.log("next", ranObject);
		console.log("next", ranQuestion);
		console.log("next", ranQuesOp);
		console.log("next", ranQuesAnsInd);
		console.log("next", ranQuesAnsStr);
		console.log("next", ranQuesImg);
		console.log("used array", ansQuesArray);

		// if (ansQuesArray.length == number of objects then gameOver) 
		questionGen();
	}

	//correct
	function correct() {
		console.log("correct");
		var correct = $("<h4>");
		$(correct).attr("id", "correct");
		$(correct).html("Correct! the answer was: " + ranQuesAnsStr);
		$("#questionSec").append(correct);

	}

	//wrong
	function wrong() {
		console.log("wrong");
		console.log("wrong");
		var wrong = $("<h4>");
		$(wrong).attr("id", "wrong");
		$(wrong).html("Wrong! the answer was: " + ranQuesAnsStr);
		$("#questionSec").append(wrong);
	}

	//timout, decrement 30seconds
		//diplay the correct answer was: answer
		//show answer
		//unanswered++

	//showanswer for 4 seconds

//state GameOver: How you did, Correct Answers, Incorrect Answers, Unanswered
	function gameOver() {
	//game stats
	//start over button
		//clears game and starts over	
	}

	function gameReset() {

	}



beforeGame();
	//game reset

//events