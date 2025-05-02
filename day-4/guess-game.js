
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretNumber = Math.floor(Math.random() * 10 ) + 1;

console.log("🎉 Welcome to the Number Guessing Game!");
readline.question("Guess a number between 1 and 10: ", (guess) => {
    const userGuess = Number(guess);
  
    if (userGuess === secretNumber) {
      console.log("🎉 Correct! You win!");
    } else {
      console.log("❌ Wrong guess. Try again next time!");
    }
  
    readline.close();
  });