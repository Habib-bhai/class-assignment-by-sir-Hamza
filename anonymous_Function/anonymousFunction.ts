// 4.Anonymous functions:
// • Assign a function expression to a variable, with one parameter that outputs the provided 
// argument to the console.
// • Pass an argument into the function.
// • Create the same function as a normal function declaration.

let anonymousFunction = function(greet:string){
console.log(greet);

}

anonymousFunction("Hello How are You")

function normalFunction(greet:string){
console.log(greet);

}

normalFunction("Hello! Welcome to the normal function")