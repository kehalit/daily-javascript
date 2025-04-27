//Build a basic calculator that can do addition, subtraction, multiplication, and division, using functions and user input.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function calculate(num1, operator, num2) {
    switch(operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num2 !== 0 ? num1 / num2 : "Error: Division by zero!";
      case '%':
        return num1 % num2;
      case '^':
        return Math.pow(num1, num2);
      default:
        return "Error: Invalid operator!";
    }
  }
  
  function startCalculator() {
    readline.question('Enter the first number: ', (firstInput) => {
      const num1 = parseFloat(firstInput);
  
      readline.question('Enter the operator (+, -, *, /, %, ^ ): ', (operator) => {
  
        readline.question('Enter the second number: ', (secondInput) => {
          const num2 = parseFloat(secondInput);
  
          const result = calculate(num1, operator, num2);
          console.log(`Result: ${num1} ${operator} ${num2} = ${result}`);
  
          readline.question('Do you want to calculate again? (yes/no): ', (answer) => {
            if(answer.toLowerCase() === 'yes') {
              startCalculator(); // call: start again
            } else {
              console.log('Thanks for using the calculator! 👋');
              readline.close();
            }
          });
  
        });
  
      });
  
    });
  }
  
  startCalculator();
  