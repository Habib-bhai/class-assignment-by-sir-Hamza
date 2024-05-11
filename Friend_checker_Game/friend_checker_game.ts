// 3.Friend checker game:
// • Prompt the user to enter a name.
// • Use a switch statement to check if the entered name is a known friend.
// • Output a confirmation message if the name is known, otherwise output a default 
// response.

import inquirer from "inquirer";
import chalk from "chalk";

let userInput = await inquirer.prompt({
  name: "friendsNameInput",
  type: "input",
  message: "Enter name to check whether or not the entered name is a friend"
})

// made the user input name insentive. So, it won't matter that user enters capital or small letter
let insensitive = userInput.friendsNameInput.toLowerCase()


switch (insensitive) {

  case "habib":
  console.log(chalk.green(`Yes, ${userInput.friendsNameInput} is a friend!`));
  break;
  case "anees":
  console.log(chalk.green(`Yes, ${userInput.friendsNameInput} is a friend!`));
  break;
  case "faiq":
  console.log(chalk.green(`Yes, ${userInput.friendsNameInput} is a friend!`));
  break;
  case "ahmed":
  console.log(chalk.green(`Yes, ${userInput.friendsNameInput} is a friend!`));
  break;
  
  default: console.log(chalk.red(`${userInput.friendsNameInput} is a STRANGER`));
  
}