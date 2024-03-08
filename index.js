//TYPE CONVERSION
let age = window.prompt("How old are you?");
console.log(age, typeof age);
age = Number(age);
age += 1;
console.log(age, typeof age);

let x = 'pizza';
let y = '522';
let z = '';

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof x);
console.log(z, typeof x);

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