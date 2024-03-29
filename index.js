//MATH OBJECT


let x = 3;
let y = 2;
let z;
let w = 1;

z = Math.round(x);
console.log(z);
//round down
z = Math.floor(x);
console.log(z);
//round up
z = Math.ceil(x);
console.log(z);
//remove all decimal
z = Math.trunc(x);
console.log(z);
//raise to the power
z = Math.pow(y,y);
console.log(z);
//square root
z = Math.sqrt(y);
console.log(z);
//natural logarithm
z = Math.log(x);
console.log(z);
//sine of a number in radians
z = Math.sin(x);
console.log(z);
//cosine of a number in radians
z = Math.cos(x);
console.log(z);
//tangent of a number in radians
z = Math.tan(x);
console.log(z);
//absolute value of number
z = Math.abs(x);
console.log(z);
//sign of number
z = Math.sign(x);
console.log(z);

let max = Math.max(w,x,y);
console.log(max);
let min = Math.min(w,x,y);
console.log(min);

//CONST = A VARIABLE THAT CANT BE CHANGED 
// let pi = 3.1416;
// pi is a constant number that should not be changed so we make it constant to avoid making errors on the calculations and they tend to be written in uppercase.
// const PI = 3.1416
// let radius;
// let circumference;

// radius = window.prompt("Enter the radius of a circle");
// circumference = 2 * pi * Number(radius);
// console.log(circumference);

// document.getElementById("submitBtn").onclick = function(){
//     radius = document.getElementById("radius").value;
//     circumference = 2 * PI * Number(radius)
//     document.getElementById("result").textContent = `Circumference is: ${circumference} cm`;
// }

//TYPE CONVERSION
// let age = window.prompt("How old are you?");
// console.log(age, typeof age);
// age = Number(age);
// age += 1;
// console.log(age, typeof age);

// let x = 'pizza';
// let y = '522';
// let z = '';

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof x);
// console.log(z, typeof x);

//ASSIGNGING CONTENT TO HMTL ELEMENTS
/*
document.getElementById("myH1").textContent = `Hello`;
document.getElementById("myP").textContent = `I like videogames.`;
*/


//USING VARIABLES
/*
let age = 23;
let name = 'Itzel';
let favoriteFood = 'Pizza';

console.log(typeof name);
console.log(`I am ${age} years old.`);
console.log(`My name is ${name}.`);
console.log(`My favorite food is ${favoriteFood}.`);

let isAdult = true;

console.log(`Itzel is an adult: ${isAdult}.`)
*/


//USING VARIABLES AND DISPLAYING IN HTML.
/*
let fullName = 'Itzel Aviles';
let age = 23;
let isStudent = false;

document.getElementById('p1').textContent = `My name is ${fullName}.`;
document.getElementById('p2').textContent = `I am ${age} years old.`;
document.getElementById('p3').textContent = `Enrolled: ${isStudent}.`;
*/


//ARITHMETIC OPERATORS
/*
let students = 30;
// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
// students = students ** 2;
// students = students % 3;

// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;
// students **= 2;
// students %= 2;
//increment/decrement by 1
// students++;
// students--;
console.log(students);
*/

//ACCEPT USER INPUT
// let username;
// username = window.prompt("What's your username? ");
// console.log(username);
// document.getElementById("submitBtn").onclick = function(){
//     username = document.getElementById("usernameInput").value;
//     document.getElementById("h1Welcome").textContent = `Hello ${username}!!`;
// }