const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let tasks = []; // 📝 This will hold all our todos
  
  function showMenu() {
    console.log("\n=== TODO List Menu ===");
    console.log("1. Add a task");
    console.log("2. View tasks");
    console.log("3. Delete a task");
    console.log("4. Exit\n");
  
    readline.question("Choose an option (1-4): ", (option) => {
      if (option === '4') {
        console.log("Exiting... Goodbye! 👋");
        readline.close();
      } else {
        console.log(`You chose option ${option}. (Functionality coming soon!)`);
        showMenu(); // Just repeat for now
      }
    });
  }
  
  console.log("Welcome to the TODO List App! 📝");
  showMenu();
  