// Make a guess if the user hits 'Enter' from the text box
document.getElementById("textGuess")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("buttonGuess").click();
    }
});

// Think of a random number
var myNumber = Math.ceil(Math.random() * 100);
var numGuesses = 0;

// Compare the user's guess to the number I thought of
function guessNumber(userGuess) {
  numGuesses++;
  if (userGuess <  myNumber) {
    alert("That number is too low, try again!");
    document.getElementById("textGuess").select();
  } else if (userGuess > myNumber) {
    alert("That number is too high, try again!");
    document.getElementById("textGuess").select();
  } else {
    alert("You got it in " + numGuesses + " guesses!!! The number was " + myNumber);
    showSurprise();
  }
}

// Unhide the video once they guess the number
function showSurprise() {
  document.getElementById("surprise").style.visibility="visible";
}