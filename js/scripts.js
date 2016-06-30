// //JS File
// console.log("Hello World");

// function add(x,y){
// 	console.log(x + y);
// }

// add(1,2);


// function test(){
// 	document.getElementById("field").innerHTML = "This is my test";
// }

// test();
// test();
// test();

// //Array//
// var classmates = ["Matt", "Tara", "Danielle", "Evan"]

// var typesOfSoda = new Array();
// typesOfSoda[0] = "Red Cream Soda";
// typesOfSoda[1] = "IBC";

// console.log(classmates);
// console.log(typesOfSoda);

// //loop that prints out classmates - classmate(or i) increases by one index value each time through the loop
// for (var classmate in classmates) {
// 	console.log(classmates[classmate]);
// }
// //OR
// for (var i=0; i<classmates.length; i++){
// 	console.log(classmates[i]);
// }


// var mixedTypeArray = ["Elephant", 100, (5>2)];
// var sameType = ["Elephant", "Giraffe", "Duck"];


// //Bronze
// function findClassmate(){
// 	for (var classmate in classmates) {
// 		console.log(classmates[classmate]);
// 	}
// }
// findClassmate();


//Silver
//************************************************************************
//******Compare any number against Array and compare for duplicates******

// randomNumbersArray = [23, 11, 67, 32, 89, 31, 99, 2, 8, 11];

// function randomNumberSearch (numberToBeSearched){
// 	for (var randomNumber in randomNumbersArray){
// 		if(randomNumbersArray[randomNumber] === numberToBeSearched){
// 			console.log(randomNumbersArray[randomNumber]);
// 		}else{
// 			console.log("There are no duplicates");
// 		}
// 	}
// }

// randomNumberSearch(23);

//************************************************************************
//******Compare ANY number against ANY array and compare for duplicates***

// randomNumbersArray1 = [23, 11, 67, 32, 89, 31, 99, 2, 8, 11];

// function isThisNumberInThisArray (numberToBeSearched, arrayToBeChecked){
// 	for (var randomNumber in arrayToBeChecked){
// 		if(arrayToBeChecked[randomNumber] === numberToBeSearched){
// 			console.log(arrayToBeChecked[randomNumber]);
// 		}else{
// 			console.log("There are no duplicates");
// 		}
// 	}
// }

// isThisNumberInThisArray(23, randomNumbersArray1);

// ************************************************************************
// ******Look at an array and pull out any duplicates******
// Still need to parse array

// randomNumbersArray1 = [23, 11, 67, 32, 89, 31, 99, 2, 8, 11];

// function dublicateNumberInArraySearch (arrayToBeChecked){
// 	for (var randomNumber in arrayToBeChecked){
// 		var number[randomNumber] = arrayToBeChecked[randomNumber];
// 		console.log(number[randomNumber]);
// 	}
// }

// dublicateNumberInArraySearch(23);

/******************DO NOT GO ABOVE THIS LINE RIGHT NOW*********************/
/******************DO NOT GO ABOVE THIS LINE RIGHT NOW*********************/

//OBJECT LITERAL (cookie cutter / blueprint)
var friend = {
	
	//Properties
	fullName			: "",
	age					: 0,
	married				: true,
	vocation			: "",
	closeLikeABrother	: true,
	yearsKnown			: 0,
	birthDate			: new Date("01/01/2001"),

	//Method
	//nickKirkes.printVocation() to call it
	printVocation	: function(){
		return this.vocation;
	},
	introduceToSisterInLaw: function (){
		if(this.yearsKnown >= 5 && this.closeLikeABrother === true && this.married === false){
			return "I want you to meet Lizzy.";
		}else{
			return "Have you tried Tinder?";
		}
	},
	birthdayComingUp: function (){
		if(this.birthDate === Date){
			return "Their birthday is today!";
		}
	}
}

var nickKirkes = Object.create(friend);
// . allows us to access properties
nickKirkes.fullName = "Nick Kirkes";
nickKirkes.age = 38;
nickKirkes.married = false;
nickKirkes.vocation = "Project Manager at Sales Force";
nickKirkes.yearsKnown = 20;
nickKirkes.birthDate = ("06/30/2016");

var hansKloepfer = Object.create(friend);
hansKloepfer.fullName = "Hans Kloepfer";
hansKloepfer.age = 42;
hansKloepfer.married = false;
hansKloepfer.vocation = "Sailboat Captain"
hansKloepfer.yearsKnown = 31;
hansKloepfer.birthDate = ("12/12/1975")

var devinGoins = Object.create(friend);
devinGoins.fullName = "Devin Goins";
devinGoins.age = 25;
devinGoins.married = true;
devinGoins.vocation = "Communications Director";
devinGoins.yearsKnown = 10;
devinGoins.birthDate = ("01/29/1990")

console.log(nickKirkes.birthDate);


