"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: "Sushi Time",
  location: "Idaho Falls",
  categories: ["soup", "sushi rolls", "fresh fish", "Organic"],
  starterMenu: ["Salmon", "Tuna", "Miso Soup", "Sesoned Green Beans"],
  mainMenu: ["California Roll", "Philadelphia Roll", "Crunchy Roll"],

  // ES6 enhanced object literals
  openingHours,

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  // ES6 another way of writing a methods in an object
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0,
  //     close: 24,
  //   },
  // },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const rest = new Map();
rest.set("name", "Sushi Time");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));


rest
  .set("categories", ["soup", "sushi rolls", "fresh fish", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");
console.log(rest.set());

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2); 
console.log(rest);
console.log(rest.size);

rest.set([1,2], 'Test');
console.log(rest);
console.log(rest.size);

console.log(rest.get([1, 2]) );
// SETS *************************
// const ordersSet = new Set([
//   "Pasta",
//   "Pizza",
//   "Pizza",
//   "Risotto",
//   "Pasta",
//   "Pizza",
// ]);
// console.log(ordersSet);

// console.log(ordersSet.size);
// console.log(ordersSet.has("Pizza"));
// console.log(ordersSet.has("preston"));
// ordersSet.add("Garlic Bread");
// ordersSet.add("Garlic Bread");
// ordersSet.delete("Risotto");
// ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// Example
// const staff = [
//   "Waiter",
//   "Chef",
//   "Waiter",
//   "Manager",
//   "Chef",
//   "Waiter",
//   "hello",
// ];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(
//   new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter", "hello"])
//     .size
// );

// Property Names
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of Object.keys(openingHours)) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// Property Values
// const values = Object.values(openingHours);
// console.log(values);

// Entire object
// const entries = Object.entries(openingHours);
// console.log(entries);

// [key, value]
// for(const [key, {open, close}] of entries){
//   console.log(`On ${key} we opent at ${open} and close at ${close}`);
// }

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// With optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// Example
// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? "closed";
//   console.log(`On ${day}, we open at ${open}`);
// }

// Methods with optional chaining
// console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
// console.log(restaurant.orderPopTart?.(0, 1) ?? "Method does not exist");

// Arrays with optional chaining
// const users = [{ name: "Preston", email: "peepee@pee.com" }];
// console.log(users[0]?.name ?? "User array empty");

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log([...menu.entries()]);

// restaurant.numGuests = 0;
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// console.log("-----||-----");
// BOOLEAN Operators
// Use any data type, return any data type
// short-circuiting (if first value is a truthy value it will return the first value)
// console.log(3 || "Preston");
// console.log("" || "Preston");
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || "" || "hello" || 23 || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log("-----&&-----");
// // short-circuiting (if first value is a falsy value it will return the first value)
// console.log(0 && "Preston");
// console.log(5 && "Preston");
// console.log("Hello" && 23 && null && "Preston");

// if (restaurant.orderPizza) {
//   restaurant.orderPizza("mushrooms", "spinach");
// }

// restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
// Destructring
// Spread, because on RIGHT side of =
// with the spread we expand the array
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// Rest, because on LEFT side of =
// It takes what is the rest of the array
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [salmon, , misoSoup, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(salmon, misoSoup, otherFood);

//Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

// Spread Operator
/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Spicy Roll"];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, atrings, maps, sets. NOT objects
const str = "Jonas";
const letters = [...str, " ", "S."];
console.log(letters);

// const ingredients = [prompt("Let's make pasta! Ingredient 1"),
//                      prompt("Ingredient 2"),
//                      prompt("Ingredient 3")];

// restaurant.orderPasta(...ingredients);
*/
// OBJECTS
// const newRestraurant = {};
/*
****************************************
// Destructuring Objects
restaurant.orderDelivery({
  address: "230 n 3rd e",
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default Values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested Objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

/* 
************************************
// Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[0];
const c = arr[0];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// Switching variables
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(1, 2);
console.log(starter, mainCourse);

// nestted destructuring
const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values
const [p, q, r] = [8, 9];
console.log(p, q, r);
*/

// Coding challenge 1
// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [players1, players2] = game.players;
// console.log(players1, players2);

// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// const [gk1, ...fielsPlayers1] = [game.team1, players1]
// console.log(gk1, fielsPlayers1);

// const [gk2, ...fielsPlayers2] = [game.team2, players2]
// console.log(gk2, fielsPlayers2);

// const [team1, draw, team2] = [game.odds.team1, game.odds.x, game.odds.team2];
// console.log(team1, draw, team2);

// function printGoals(...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// }

// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals("Pavard", "Martinez", "Alaba", "Davies", "Kimmich");
// printGoals("Lewandowski", "Gnarby", "Lewandowski", "Hummels");

// team1 < team2 && console.log("Team 1 is more likely to win");
// team1 > team2 && console.log("Team 2 is more likely to win");
