let random = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let maxAttempts = 5;

while (attempts < maxAttempts) {
  let guess = parseInt(prompt("Guess the number between 1 and 100:"));
  attempts++;

  if (guess === random) {
    alert("Congratulations! You guessed the correct number.");
    break;
  } else if (guess > random) {
    alert("Too high!");
  } else {
    alert("Too low!");
  }

  if (attempts === maxAttempts) {
    alert("Sorry! You've used all your attempts. The correct number was " + random);
  }
}
