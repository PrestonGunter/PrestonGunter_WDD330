//Personal study

//Loop Iteration

//For loops keep running while the condition is TRUE
// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep}`);
// }

const prestonArray = [
  "Preston",
  "Gunter",
  2021 - 1998,
  "Student",
  ["Logan", "Mario", "Aklilu"],
  true,
];

const types = [];

//arrays are zero based so let i be 0
for (let i = 0; i <= prestonArray.length; i++) {
  //Reading the prestonArray
  console.log(prestonArray[i]);

  //filling the types array
  // types[i] = typeof prestonArray[i];

  types.push(typeof prestonArray[i]);
}

console.log(types);

const years = [1998, 1999, 2000, 2001];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2021 - years[i]);
}

console.log(ages);

//continue and break statements

//This for loop is getting only strings
console.log('----This for loop is getting only strings----')
for (let i = 0; i <= prestonArray.length; i++) {
    if(typeof prestonArray[i] !== 'string') continue;
    console.log(prestonArray[i]);
  }


  //This for loop will break when a number is reached
  console.log('----This for loop will break when a number is reached----')
for (let i = 0; i <= prestonArray.length; i++) {
    if(typeof prestonArray[i] === 'number') break;
    console.log(prestonArray[i]);
  }

  //looping through elements backwards
  const honda = [
      'Honda',
      'Civic',
      2006,
      'Silver',
      ['Hybrid', '1.6L', '156,000 miles']
  ];

  for(let i = honda.length - 1; i >= 0; i--){
    console.log(i, honda[i]); 
  }

//Nested Loop
//I think working out is a very good analogy of nested for loops
for(let set = 1; set <= 3; set++){
    console.log(`Bench Press set ${set}`);

        for(let rep = 1; rep <= 5; rep++ ){
            console.log(`Bench press rep ${rep}`);
        }
}

//While loop 
//While loops are nice when you do not know how many iteration you have to go through
//With the while loop you only need a condtion I will show an example

//In this example you do not know when the dice roll will === 6
//So using a for loop would not be ideal in a situation like this
//You would want to use a while loop
let dice = Math.trunc( Math.random() * 6 + 1 );

while(dice !== 6){ 
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc( Math.random() * 6 + 1 );

    if(dice === 6){
        console.log(`Congrats you rolled a ${dice}`)
    }
}

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let totals = [];

const calcTip = function(bills) { 
    return bills >= 50 && bills <= 300 ? bills * .15 : bills * 0.2;
}

for(let i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);

    totals.push(tip + bills[i]); 
    
}

console.log(totals);


const calcAvgrage = function(arr){
    let total = 0; 
    for(let i = 0; i < arr.length; i++){ 
        total += arr[i];
    }

    let avgrage = total / arr.length;
    return console.log(avgrage); 
}

calcAvgrage([5,5,5,5]);



