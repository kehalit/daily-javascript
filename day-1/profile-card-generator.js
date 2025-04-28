/* Create a small JavaScript app that builds a "Profile Card" from variables and displays it nicely.*/
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let name, age, location, hobbies;
  
  // Ask for user input one at a time
  readline.question('What is your name? ', (userName) => {
    name = userName;
    
    readline.question('What is your age? ', (userAge) => {
      age = userAge;
  
      readline.question('Where do you live? ', (userLocation) => {
        location = userLocation;
  
        readline.question('Enter your hobbies separated by commas: ', (hobbiesInput) => {
          hobbies = hobbiesInput.split(',').map(hobby => hobby.trim());
          
          // Now we can generate the profile card
          function generateProfileCard() {
            return `
  ----------------------------
  | Name: ${name}
  | Age: ${age}
  | Location: ${location}
  | Hobbies: ${hobbies.join(", ")}
  ----------------------------`;
          }
          
          console.log(generateProfileCard());
          
          readline.close();  // Close the readline interface
        });
      });
    });
  });
  