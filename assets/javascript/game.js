var wins = 0;
var losses = 0;
var guessesLeft = 10;

var compChoices = "abcdefghijklmnopqrstuvwxyz";

var userInput = document.getElementById("guesses");
var randomGuess = "";

randomGuess = compChoices[Math.floor(Math.random() * 26)];

// for(var i=0; i < 10; i++){
  document.onkeyup = function(event) {
    console.log(randomGuess);

    userInput.innerText += event.key;

    if (randomGuess === userInput) {
      wins++;
      document.getElementById("wins").innerText = wins;
      //if wins is 6
        //yay!
      // else reset the game
        // guessesLeft back to 10
        //clear userInput
        // make computer choose new letter
        if (wins >= 6){
          document.getElementById("result").innerText = "You won!";
        }
    }
    else {
      guessesLeft--;
      document.getElementById("chances-left").innerText = guessesLeft;
      //if guessesLeft is 0
        losses++;
        document.getElementById("losses").innerText = losses;
        //if losses is 6
          //boo
        // else reset the game
          // guessesLeft back to 10
          //clear userInput
          // make computer choose new letter
          if (losses >= 6) {
            document.getElementById("result").innerText = "Lo siento, te pierde";
          }
    }

    //guessesLeft--;

    // if(guessesLeft === 0 && losses === 6){
    //   document.getElementById("result").innerText = "Sorry you lost. Try again?";
    // } else {
    //   document.getElementById("result").innerText = "You won! Play again?";
    // }

    //continue; //I tried to use continue to restart the loop

  }
// }

// var i = 0;
// var n = 0;
// while (i < 5) {
//   i++;
//   if (i == 3) {
//     continue;
//   }

//   n += i;
//   console.log(n); 
// }
 
