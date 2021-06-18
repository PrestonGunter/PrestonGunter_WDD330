"use strict";
// Scope Chain Practice
// function calcAge(birthYear) {
//   const age = 2021 - birthYear;

//   function printAge() {
//     const output = `${firstName}, You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1997 && birthYear <= 2012) {
//       var zoomer = true;
//       const string = `Oh, and you're a zoomer, ${firstName}`;
//       console.log(string);

//       function add(a, b) {
//           return a + b;
//       }
//     }
//     console.log(zoomer);
//     // add(1,1);
//   }

//   printAge();

//   return age;
// }

// const firstName = "Preston";
// calcAge(1998);

// Hosting Practice
// console.log(me);
// console.log(job);
// console.log(year);

// var me = "Preston";
// let job = "Student";
// const year = 1991;

// Functions

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// Example
// console.log(numProducts);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log("All Products Deleted!!!");
// }

// var x = 1;
// let y = 2;
// const z = 3;

// this keyword examples
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// // calcAge(1998);

// const calcAgeArrow = (birthYear) => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// // calcAgeArrow(1998);

// const preston = {
//   year: 1998,
//   calcAge: function() {
//     console.log(this);
//     console.log(2037 - this.year);
//   }
// }
// // preston.calcAge();

// const matilda = {
//   year: 2017
// }

// matilda.calcAge = preston.calcAge;
// matilda.calcAge();

// const f = preston.calcAge;
// f();

// Regular Functions vs. Arrow Functions

// const preston = {
//   firstName: "Preston",
//   year: 1998,
//   calcAge: function () {
//     console.log(2037 - this.year);

// Solution 1
// const self = this;
// const isMillenial = function () {
//   console.log(self);
//   console.log(self.year >= 1981 && self.year <= 1996);
// };

// Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// preston.greet();
// preston.calcAge();

// Arguments keyword
// const addExpr = function (a, b){
//   console.log(arguments);
//   return a + b;
// }
// addExpr(3, 5);
// addExpr(3, 5, 6)

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// }
// addArrow(3, 5, 6);

// let age = 23;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: "Preston",
//   age: 30,
// };
// const friend = me;
// friend.age = 27;
// console.log('friend', friend);
// console.log('preston', me);

// Primaitive types 
let lastName = "Gunter";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

// Reference Types
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("old last name", jessica);
console.log("new last name", marriedJessica);

// Copying Objectts
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); 
jessicaCopy.lastName = "Davis"


jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log("old last name", jessica2);
console.log("new last name", jessicaCopy);