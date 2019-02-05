var wins = 0;
var losses = 0;
var guessesLeft = 10;

var compChoices = "abcdefghijklmnopqrstuvwxyz";

var userInput = document.getElementById("guesses");
var randomGuess = "";


for(var i=0; i < 10; i++){
  document.onkeyup = function(event) {
    randomGuess = compChoices[Math.floor(Math.random() * 26)];
    console.log(randomGuess);

    userInput.innerText += event.key;

    if (randomGuess === userInput) {
      wins++;
      document.getElementById("wins").innerText = wins;
    }
    else {
      losses++;
      document.getElementById("losses").innerText = losses;
    }

    guessesLeft--;
    document.getElementById("chances-left").innerText = guessesLeft;

    if(guessesLeft === 0 && losses === 6){
      document.getElementById("result").innerText = "Sorry you lost. Try again?";
    } else {
      document.getElementById("result").innerText = "You won! Play again?";
    }

    //continue; I tried to use continue to restart the loop

  }
}
 
