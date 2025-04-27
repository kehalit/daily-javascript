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
      default:
        return "Error: Invalid operator!";
    }
  }
  
  // Now let's ask the user step-by-step:
  readline.question('Enter the first number: ', (firstInput) => {
    const num1 = parseFloat(firstInput);
  
    readline.question('Enter the operator (+, -, *, /): ', (operator) => {
  
      readline.question('Enter the second number: ', (secondInput) => {
        const num2 = parseFloat(secondInput);
  
        const result = calculate(num1, operator, num2);
        console.log(`Result: ${num1} ${operator} ${num2} = ${result}`);
        
        readline.close();
      });
  
    });
  
  });
  