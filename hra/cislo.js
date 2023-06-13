function checkGuess() {
  var guessInput = document.getElementById("guessInput");
  var guess = parseInt(guessInput.value);
  var result = document.getElementById("result");

  if (isNaN(guess)) {
    result.textContent = "Zadejte platné číslo.";
    result.style.color = "red";
  } else if (guess < 1 || guess > 10) {
    result.textContent = "Zvolte číslo mezi 1 a 10.";
    result.style.color = "red";
  } else {
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    if (guess === randomNumber) {
      result.textContent = "Gratulujeme, uhodli jste číslo!";
      result.style.color = "green";
    } else {
      result.textContent = "Bohužel, uhodli jste špatně. Správné číslo bylo: " + randomNumber;
      result.style.color = "red";
    }
  }
  
  guessInput.value = "";
  guessInput.focus();
}
