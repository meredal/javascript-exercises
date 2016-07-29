// IF/ELSE STATEMENTS START
// rock, paper, scissors game.

// var userChoice = prompt("Do you choose rock, paper or scissors?");
// var computerChoice = Math.random();
// if (computerChoice < 0.34) {
// 	computerChoice = "rock";
// } else if(computerChoice <= 0.67) {
// 	computerChoice = "paper";
// } else {
// 	computerChoice = "scissors";
// }
// console.log("User: " + userChoice);
// console.log("Computer: " + computerChoice);
//
//
// var compare = function (choice1, choice2) {
//   if (choice1 === choice2) {
//     return "The result is a tie!"
//   }
//   else if (choice1 === "rock") {
//     if (choice2 === "scissors") {
// 	    return "rock wins"
//     } else {
//       return "paper wins"
//     }
//   }
// 	else if (choice1 === "paper") {
// 		if (choice2 === "rock") {
//       return "paper wins"
//     } else {
//       return "scissors wins"
//     }
//   }
// 	else if (choice1 === "scissors") {
// 		if (choice2 === "rock") {
// 			return "rock wins"
// 		} else {
// 			return "scissors wins"
// 		}
// 	}
// };
//
// console.log(compare(userChoice, computerChoice));
// alert("Check the console for the results!");

// IF/ELSE STATEMENTS END

// FOR LOOPS START

// Evens vs. Odds. Write a for loop that will iterate 1-20 and report if the number is even or odd.

// alert("Evens and Odds. Check the console!")
//
// for (var i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i + ' is even.');
//     } else {
//         console.log(i + ' is odd.');
//     }
// }


// Multiplication Tables. Show the Multiplication Table for every multiplier from 1-10.

// alert("Multiplication Tables. Check the console!")
//
// for (var multiplier = 0; multiplier <= 10; multiplier++) {
// 	for (var i = 0; i <= 10; i++) {
//    var answer = multiplier * i;
//    console.log(multiplier + " * " + i + " = " + answer);
//  }
// }

// FOR LOOPS END

// WHILE LOOPS START

// Simple Loop.

// alert("Simple Loop. Check the Console!")
//
// var i = 1
//
// while(i <= 10){
// 	if (i === 1) {
// 		console.log("We have looped " + i + " time.");
// 	} else {
// 		console.log("We have looped " + i + " times.");
// 	}
// 	i++;
// }

// Multiples from User Input.

var userNumber = prompt("Enter a number 1-10.");
alert("We have counted up to 100 by multiples of " + userNumber + ". Check the console!");

var i = 1

while (i <= 50) {
	if ((i*userNumber) <= 100) {
		console.log(i * userNumber);
		i++;
	} else {
		console.log("The loop is over!");
		i=100;
	}
}

// WHILE LOOPS END
