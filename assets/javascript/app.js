//varibles
//objects 

var Questions = [
	{
		question:"What does the fox say?"
		options:[
		   "Moo","woof","hi","butt"
		],
		answer:1
		image: 
	},
	{
		question:"What does the fox say?"
		options:[
		   "Moo","woof","hi","butt"
		],
		answer:1
		image:
	},
	{
		question:"What does the fox say?"
		options:[
		   "Moo","woof","hi","butt"
		],
		answer:1
		image:
	},
	{
		question:"What does the fox say?"
		options:[
		   "Moo","woof","hi","butt"
		],
		answer:1
		image:
	},
	{
		question:"What does the fox say?"
		options:[
		   "Moo","woof","hi","butt"
		],
		answer:1
		image:
	}
]

var state = 'BeforeGame'

console.log(Questions[0],Questions[1],Questions[2])

function isUserCorrect(questionNumber,userAnswer){
   return Questions[questionNumber].answer == userAnswer
}

radiobutton.onClick(function(radioid){
	if(isUserCorrect(questionNumber,radioid)){
	    state = 'UserCorrect'
	}else{
	    state = 'UserWrong'
	}
})

var Question1 = {
	question: ,
	a: ,
	b: ,
	c: ,
	d: ,
	answer:'a'
	image: ,


}
//object array

var questionsArray = [
  Question1, Question2, Question2

//functions

//state BeforeGame:
	//start button to start game

//state InGame:

	//diplay random question & timer

	//display question and choices
		//choices are on.clicks
		//if onclick is true then correct
		//if onclick is false then wrong
		//if timout == 0 then unanswered

	//correct
		//display Wrong! the correct answer was: answer
		//showanswer
		//correct++

	//wrong
		//display Wrong! the correct answer was: answer
		//showanswer
		//wrong++

	//timout, decrement 30seconds
		//diplay the correct answer was: answer
		//show answer
		//unanswered++

	//showanswer for 5 seconds

//state GameOver: How you did, Correct Answers, Incorrect Answers, Unanswered
	//game stats
	//start over button
		//clears game and starts over

	//game reset

//events