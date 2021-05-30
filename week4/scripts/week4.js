import { Car } from "./car.js";

let cars = [];

if (localStorage.getItem("cars")) {
  cars = JSON.parse(localStorage.getItem("cars"));
}

document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  let newCar = new Car(
    document.querySelector("#Make").value,
    document.querySelector("#Model").value,
    document.querySelector("#Year").value,
    document.querySelector("#Color").value,
    document.querySelector("#Miliage").value
  );
  cars.push(newCar);
  localStorage.setItem("cars", JSON.stringify(cars));

  document.forms[0].reset();
});
// let car1 = new Car('Honda', 'Civic', '2006', 'Silver');
// let car2 = new Car('Ford', 'Focus', '2006', 'Silver');

// cars.push(car1);
// cars.push(car2);

//add to local storage
// localStorage.setItem('cars', JSON.stringify(cars));

let ul = document.querySelector(".cars");
cars.forEach((car) => {
  ul.innerHTML += `<li>  ${car.Make} ${car.Model} ${car.Year} </li>`;
});

console.log(cars);

//Personal Study Code
//dot vs bracket notation
// const preston = {
//     firstName: 'Preston',
//     lastName: 'Gunter',
//     birthYear: 1998,
//     job: 'Student',
//     friends: ['Logan', 'Mario', 'Aklilu'],
//     hasDriversLicense: true
// };

// console.log(preston);
// // this is dot notation
// console.log(preston.lastName);

// // this is bracket notation
// console.log(preston['lastName']);

// const nameKey = 'Name';
// console.log(preston['first' + nameKey]);
// console.log(preston['last' + nameKey]);

// //in this example the bracket notation works
// //if you tried to use the dot notation you would get an undfined
// // const aboutPreston = prompt('What do you want to know about Preston? Choose between firstName, lastName, age, job, and friends');
// // console.log(aboutPreston[aboutPreston]);

// // if(preston[aboutPreston]){
// //     console.log(aboutPreston[aboutPreston]);
// // }
// // else{
// //     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends!')
// // }

// //This will add the locaiton property to the preston object
// preston.location = 'Texas';

// // I wanted to show that the dot notation is you calling a property that has already been made.
// console.log(`${preston.firstName} has ${preston.friends.length}, and his best friend is called ${preston.friends[0]}`)

// const preston = {
//     firstName: 'Preston',
//     lastName: 'Gunter',
//     birthYear: 1998,
//     job: 'Student',
//     friends: ['Logan', 'Mario', 'Aklilu'],
//     hasDriversLicense: true,

//     //Object Methods
//     // calcAge: function (birthYear){
//     //     return 2037 - birthYear;
//     // }

//     // calcAge: function (){
//     //     console.log(this);
//     //     return 2037 - this.birthYear;
//     // }

//     calcAge: function (){
//         this.age = 2021 - this.birthYear
//         return this.age;
//     },

//     aboutMe: function(){
//         if(this.hasDriversLicense){
//             this.aboutMe = `${this.firstName} is a ${this.age}-year old student, and he has a drivers license`;
//             return this.aboutMe
//        return
//         }
//         else{
//             this.aboutMe = `${this.firstName} is a ${this.age}-year old student, and he does not have a drivers license`;
//             return this.aboutMe
//         }
//     }

// };
//The calcAge function has now became a property in the preston object

// console.log(preston.calcAge(1894));

// console.log(preston.age);

// console.log(preston.aboutMe());

//challenge
const markMiller = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const johnSmith = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

console.log(johnSmith.calcBMI());
console.log(markMiller.calcBMI());

if (johnSmith.BMI > markMiller.BMI) {
  console.log(
    `${johnSmith.firstName}'s BMI (${johnSmith.calcBMI()}) is higher than ${
      markMiller.firstName
    }'s (${markMiller.calcBMI()})`
  );
} else {
  console.log(
    `${johnSmith.firstName}'s BMI (${johnSmith.calcBMI()}) is lower than ${
      markMiller.firstName
    }'s (${markMiller.calcBMI()})`
  );
}
