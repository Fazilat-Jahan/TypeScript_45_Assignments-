"use strict";
/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array */
//Tests for equality and inequality with strings
console.log("Tests for equality and inequality with strings:");
let gender = 'Female';
let Gender = 'Male';
console.log(gender == Gender);
console.log(gender !== Gender);
//Tests using the lower case function
console.log("Tests using the lower case function:");
const lowerCase = "FazilatJahan";
console.log(lowerCase.toLowerCase() == 'fazilatjahan');
console.log(lowerCase.toLowerCase() == 'fazilat jahan');
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:");
const num1 = 27;
const num2 = 25;
console.log(num1 == num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
//Tests using and and or operators
console.log("Tests using and and or operators");
const condition1 = 50;
const condition2 = 60;
console.log(condition1 == condition2 && condition1 !== condition2);
console.log(condition1 == condition2 || condition1 !== condition2);
// Test whether an item is in a array
//Test whether an item is not in a array
console.log("Test whether an item is in a array,", "Test whether an item is not in a array");
let season = ['Summer', 'Winter', 'Autumn', 'Spring'];
console.log(season.includes("Winter"));
console.log(season.includes("winter"));
