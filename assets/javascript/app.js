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
var numberOfQues = 4; //make dynamic later
var optionId = 0;
var ansQuesArray = [];
var win = 0;
var loss = 0;
var none = 0;
var countdown = 31;
var showAnsDet;
var state = "beforeGame";
var ranNum;
var ranQuesAnsInd;
var ranQuesAnsStr;
var ranQuesImg;
var intervalId;
var clockRunning = false;

//functions

//state BeforeGame:
	//start button to start game
	function beforeGame(btnName){
		var startBtn = $("<button>");
		$(startBtn).attr("id", "start");
		$(startBtn).addClass("btn btn-info number");
		$(startBtn).attr("value", "start");
		$(startBtn).html("<h3>" + btnName + "!</h3>");
		$("#startSec").append(startBtn);
		console.log("start");
	}

	$("#startSec").on("click","#start", function(){
	inGame(); // changes state of game to inGame after onClick
	});
	

	//state InGame:
	function inGame(){
		state = "inGame";
		ansQuesArray = [];
		win = 0;
		loss = 0;
		$("#start").remove();
		ranNum = Math.floor(Math.random() * 4) + 1;
		console.log("first random", ranNum);
		questionGen(ranNum);
		ansQuesArray.push(ranNum);
		console.log("ques array", ansQuesArray);
	}

	//questionGen
	//generates the same question again need to randomize
	function questionGen(ranIndex) {
	//diplay random timer & questions
		$("#stats").remove();
		var ranQuestion = questions[ranIndex].question;
		var ranQuesOp = questions[ranIndex].options //list of options
		var question = $("<h2>");
		timerfunc();
		//var timer = $("<h3>");
		// $(timer).attr("id", "timer");
		// $(timer).html(countdown + " seconds left");//countdown = 30 and decrement
		// $("#questionSec").append(timer);
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
	}

	function nextQuestionGen() {
	// remove previous answer from screen
		$("#correct").remove();
		$("#wrong").remove();
		$("#question").remove();
		$(".option").remove();
		//$("")of img.remove();
		countdown = 31;
		ranNum = Math.floor(Math.random() * 4) + 1;
		console.log("second random", ranNum);
		// Repeat until random answers array length = 4
		var indexTest=ansQuesArray.indexOf(ranNum)
		console.log("indexOf: ", indexTest);

		if (ansQuesArray.length < numberOfQues) {
			// Generate random number between 1 and 4
			while(indexTest != -1) {
			ranNum = Math.floor(Math.random() * 4) + 1;//issue
			indexTest = ansQuesArray.indexOf(ranNum);
			console.log("whileloop random", ranNum);
				//	Check random number in  random answers array?
			}
			ansQuesArray.push(ranNum);
			questionGen(ranNum);

		}else{
			stop()
			gameOver();
		}

		console.log("ques array", ansQuesArray);

	}

	//correct
	function correct() {
		ranQuesAnsStr = questions[ranNum].options[ranQuesAnsInd];
		console.log("correct");
		var correct = $("<h4>");
		$(correct).attr("id", "correct");
		$(correct).html("Correct! The answer was: " + ranQuesAnsStr);
		$("#questionSec").append(correct);

	}

	//wrong
	function wrong() {
		ranQuesAnsStr = questions[ranNum].options[ranQuesAnsInd];
		console.log("wrong");
		var wrong = $("<h4>");
		$(wrong).attr("id", "wrong");
		$(wrong).html("Wrong! The answer was: " + ranQuesAnsStr);
		$("#questionSec").append(wrong);
	}

	//timout, decrement 30seconds
	function timerfunc() {
		if (!clockRunning) {
			intervalId = setInterval(unanswered, 1000);
			clockRunning = true;
			console.log(intervalId);	
		}
	}

	function unanswered() {
			countdown--;

			var timer = $("<h3>");
			$(timer).attr("id", "timer");
			$(timer).html(countdown + " seconds left");//countdown = 30 and decrement
			$("#timerSec").html(timer);

			if (countdown == 0 || ansQuesArray.length == numberOfQues + 1) {
				$("#question").remove();
				$(".option").remove();
				//$("#timer").remove();
				stop();
				ranQuesAnsStr = questions[ranNum].options[ranQuesAnsInd];
				console.log("countdown==0");
				var unanswered = $("<h4>");
				$(unanswered).attr("id", "wrong");
				$(unanswered).html("Ok.. The answer was: " + ranQuesAnsStr);
				$("#questionSec").append(unanswered);
				none++;
				setTimeout(nextQuestionGen, 1000);

			}
	}
	
	function stop() {

      clearInterval(intervalId);
      clockRunning = false;
      console.log("inStopFunction: ",intervalId);
    }

	//showanswer for 4 seconds

//state GameOver: How you did, Correct Answers, Incorrect Answers, Unanswered
	function gameOver() {
		console.log("game over");
		console.log("win ", win);
		console.log("loss ", loss);
		$("#question").remove();
		$(".option").remove();
		$("#timer").remove();
		//game stats
		var stats = $("<h4>");
		$(stats).attr("id", "stats");
		$(stats).html("Correct: " + win + "<br> Wrong: " + loss + "<br> Unanswered: " + none);
		$("#questionSec").append(stats);
		//start over button
		gameReset();
		
	}

	//game reset
	function gameReset() {
		console.log("reset");
		setTimeout(beforeGame("Play Again"), 1000);
		//beforeGame("Play Again");
	}

		//choices are on clicks
$("#questionSec" ).on("click", ".option", function() {
	optionId = $(this).attr("id");
	console.log(optionId);
	ranQuesAnsInd = questions[ranNum].answer;
	ranQuesImg = questions[ranNum].image;
	//if onclick is true then correct
	$("#question").remove();
	$(".option").remove();
	$("#timer").remove();
	if (optionId == ranQuesAnsInd) {
		//display correct for 3 seconds then new question
		correct();
		win++;
		setTimeout(nextQuestionGen, 1000);//calls next question after 3sec
	//calls next question after 3sec
	}else {//if onclick is false then wrong
		//display wrong for 3 seconds then new question
		wrong();
		loss++;
		setTimeout(nextQuestionGen, 1000);//calls next question after 3sec
	}
	//if timout == 0 then unanswered

});

beforeGame("START");
	