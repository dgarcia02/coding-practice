// Day 0 - JavaScript fundamentals

// // Section 1
/**
*   A line of code that prints "Hello, World!" on a new line is provided in the editor. 
*   Write a second line of code that prints the contents of 'parameterVariable' on a new line.
*
*	Parameter:
*   parameterVariable - A string of text.
**/
// function greeting(parameterVariable) {
//     // This line prints 'Hello, World!' to the console:
//     console.log('Hello, World!');

//     // Write a line of code that prints parameterVariable to stdout using console.log:
// }

const greeting = (parameterVariable) => {
    parameterVariable = 'Welcome ro 10 days of JavaScript!'

    console.log('Hello World!');
    console.log(parameterVariable);
}
// console.log(greeting());


// // Section 2
// Print three lines:
// 1. The sum of 'firstInteger' and the Number representation of 'secondInteger'.
// 2. The sum of 'firstDecimal' and the Number representation of 'secondDecimal'.
// 3. The concatenation of 'firstString' and 'secondString' ('firstString' must be first)

const performOperation = (secondInteger, secondDecimal, secondString) => {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
    
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';
    
    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number     type) on a new line.
    console.log(firstInteger + secondInteger);
    
    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number           type) on a new line.
    console.log(firstDecimal + secondDecimal);
    
    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The       variable 'firstString' must be printed first.
    console.log(firstString + secondString);   
}

console.log(performOperation(3, 5.2, 'is an awesome  place to study!'));