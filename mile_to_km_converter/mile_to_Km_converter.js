import inquirer from "inquirer";
import chalk from "chalk";
// 1. Miles-to-Kilometers Converter (Operators):
// • Create a variable named miles and assign a numeric value representing distance in miles.
// • Calculate the equivalent distance in kilometers using the conversion factor (1 mile = 
// 1.60934 kilometers). You can achieve this by multiplying miles by 1.60934.
// • Store the converted distance in kilometers in a variable named kilometers.
// • Use console.log to print a message in the following format: 
// The distance of 130 kms is equal to 209.2142 miles
let answer = await inquirer.prompt({
    name: "distanceInMiles",
    type: "number",
    message: "Enter the distance in miles: "
});
let miles = answer.distanceInMiles;
let oneMileInKm = 1.60934;
let kilometers = miles * oneMileInKm;
console.log(chalk.bold.magenta(`${chalk.bold.red(miles)}-Miles in kilometers equals to: ${chalk.blue.bold(kilometers)}`));
