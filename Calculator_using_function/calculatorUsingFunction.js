// 3.Calculator project using function:
// • Set up two variables containing number values.
// • Set up a variable to hold an operator (+ or -).
// • Create a function that takes two numbers and an operator as parameters, performs the 
// corresponding operation, and returns the result.
// • Call the function with the variables and operator, and output the result using console.log.
// • Update the operator value and call the function again with the updated arguments
import inquirer from "inquirer";
let response = await inquirer.prompt([
    {
        name: "firstNumber",
        type: "number",
        message: "Enter first number: "
    },
    {
        name: "secondNumber",
        type: "number",
        message: "Enter second number: "
    },
    {
        name: "operator",
        type: "input",
        message: "Enter operator (+ , -, *, /)"
    }
]);
let FirstNumber = response.firstNumber;
let secondNumber = response.secondNumber;
let operator = response.operator;
function calculator(firstNum, secondNum, operator) {
    let result;
    switch (operator) {
        case "+":
            result = firstNum + secondNum;
            break;
        case "-":
            result = firstNum - secondNum;
            break;
        case "*":
            result = firstNum * secondNum;
            break;
        case "/":
            result = firstNum / secondNum;
            break;
        default:
            console.log("Invalid operator");
            break;
    }
    return result;
}
console.log(`${FirstNumber} ${operator} ${secondNumber} = ${calculator(FirstNumber, secondNumber, operator)} `);
