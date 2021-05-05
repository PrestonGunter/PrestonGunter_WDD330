//Personal Study Code

//3 different function types
// This is a Function Declaration
function age(birthYear) {
    return 2021 - birthYear;
}

// In order to call or invoke the function there are 2 way to go about it

// This is the way I like the best
//You first decalre a varible then = that varible to the function
// you then can use this varible anywhere in your code
let calcAge = age(1998);
console.log(calcAge);

//The second way that I have seen is calling it just by the function name
//example
console.log(age(2000));


//This is a Function Expression
let mph = function (miles, hours) {
    return (miles / hours);
}


//This is a Arrow Function
let valueOfA = a => a + 100;

//What ever you put as the value of a it will add 100 to it
console.log(valueOfA(10));