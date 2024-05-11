// 4.Functions:
// • Set up two different variables with different values.
// • Call a function with these variables as arguments and output the result using console.log.
// • Create a second call to the function with two more numbers as arguments.

function differentVariable(variable1:number ,variable2: number){

    return variable1 + variable2
}

let variable1 = 10
let variable2 = 99
// FIRST CALL: WITH VARIABLES AS ARGUMENT
console.log(differentVariable(variable1,variable2));

// SECOND CALL: WITH NUMBERS AS ARGUMENT
console.log(differentVariable(2,3));

