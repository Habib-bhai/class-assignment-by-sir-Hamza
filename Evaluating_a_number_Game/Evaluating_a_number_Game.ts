import inquirer from "inquirer"
import chalk from "chalk"
// 2.Evaluating a number game:
// • Prompt the user to enter a number.
// • Compare the entered number with a dynamic number value.
// • Output the result indicating whether the entered number is greater than, equal to, or less 
// than the dynamic number value.
console.log("========================================================================================================")
console.log("\t\t\t\t NUMBER GUESSING GAME");

let userGuess

let numberToGuess = Math.floor(Math.random() *10 +1)
while(userGuess!= numberToGuess){
    
    let answer = await inquirer.prompt({
        name:"userInputNumber",
        type:"number",
        message:"Guess the number"
    })
    
    //  FIRST LOGIC: USING TERNARY OPERATOR
    userGuess = answer.userInputNumber
    userGuess < numberToGuess ? console.log(chalk.blue("Enter a number greater than this one")) : null; 
    userGuess >numberToGuess ? console.log(chalk.magentaBright("Enter a number smaller than this one")) : null; 
    userGuess === numberToGuess ? console.log(chalk.bgGreen("Congratulations!!! YOU GUESSED IT RIGHT")) : null;

    // SECOND LOGIC: USING IF-ELSE
//     if(answer.userInputNumber < numberToGuess){
//         console.log(chalk.blue("Enter a number greater than this one"));
        
//     }
//    else if(answer.userInputNumber > numberToGuess){
//         console.log(chalk.magentaBright("Enter a number smaller than this one"));
        
//     }
//     else if(answer.userInputNumber === numberToGuess){
//         console.log(chalk.bgGreen("Congratulations!!! YOU GUESSED IT RIGHT"));
        
//     }
    
}
