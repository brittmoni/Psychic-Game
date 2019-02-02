var wins = 0;
var losses = 0;
var guessesLeft = 10;

var compChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var userInput = "";
var randomGuess = " ";
for (i=0; i < compChoices.length; i++){
  randomGuess = compChoices[Math.floor(Math.random() * 26)];

  if (userInput === randomGuess) {
    wins++;
    document.getElementById("wins").innerText = "Wins: " + wins;
  }
  else {
    losses++;
    document.getElementById("losses").innerText = "Losses: " + losses;
  }
};