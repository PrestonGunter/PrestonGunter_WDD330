// Personal Study Code Examples

//Template Literals
const firstName = 'Preston'
const job = 'painter'
const year = 2021;
const birthYear = 1998;

// This is a string 
const preston = "i'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(preston);

//This is a template literal. It is much easier to read and it is much easier to type out!!
const prestonNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(prestonNew);

//you can also do template literals on mutiple lines!!
console.log(`String 
mutiple 
lines`);

//Truthy and Falsy code Examples

//This shows a falsy value. and will only display the second console.log message!
let money = 0;
if (money) {
    console.log(`Wow you have so much money you are rich!!`);
} else {
    console.log(`You have no money what happend??`);
}

//If you change the value of money to any number and it will change it to a truthy value. And will now display the first console.log message!
money = 100;
if (money) {
    console.log(`Wow you have so much money you are rich!!`);
} else {
    console.log(`You have no money what happend??`);
}

//Here is another falsy value example that I thought was super interesting.
// When you dont assign anything to a variable is defaults it to undefined.
// If you where to give preston any kind of value (other than the falsy values) it would display the the first message;
let preston;
if (preston) {
    console.log("my name is preston");
} else {
    console.log("Preston in undefined");
}