
document.getElementById("button-1").onclick = function () {
  location.href = "./pages/about.html";
};

document.getElementById("button-2").onclick = function () {
  alert("Hello world!");
};

document.getElementById("button-3").onclick = function () {
  document.getElementById("content").style.color = "blue";
};

var myNumber = Math.ceil(Math.random() * 100);
var numGuesses = 0;

function guessNumber(userGuess) {
  numGuesses++;
  if (userGuess <  myNumber) {
    alert("That number is too low, try again!");
  } else if (userGuess > myNumber) {
    alert("That number is too high, try again!");
  } else {
    alert("You got it in " + numGuesses + " guesses!!! The number was " + myNumber);
    showSurprise();
  }

  function showSurprise() {
    document.getElementById("surprise").style.visibility="visible";
  }
}