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

//Array Review

const friends = ['Preston', 'Kendra', 'Mario'];
const years = new Array(1456, 1998, 1995, 2020);
console.log(friends);
console.log(years); 
// Arrays are zero based meaning in order to get the first element of the array you have to call it like this
console.log(friends[0]);
console.log(years[0]); 

//Array Methods

/*What if I want to add something new to the end of the array?
you would use the .push method to do that */ 
friends.push('Logan');
console.log(friends); 

//you can also use the .push on numbers also
years.push(1589); 
console.log(years);

//To check the size of the array you can use the .length function
//Doing this will show you how long the length is
console.log(friends.length); 
console.log(years.length); 

//Since Arrays are zero based you can get the last element of that array by using this
console.log(friends[friends.length -1]); 
console.log(years[years.length - 1]); 

//Now I know what your saying "How do I add something to the start of the array?" 
//In order to do this you need to use the .unshift method.
friends.unshift('Aklilu'); 
years.unshift(3000);
console.log(friends); 
console.log(years); 

//Ok now lets say you got really mad at your friends and now yall are enemies. So you need to remove that person from your friends array
//There are two methods you can use to remove your enemies and thoes are .shift and .pop
//using the .shift method removes the first element in that array. 
const shift = friends.shift(); 
console.log(friends); 

//Something that I found intersting is that all these methods will always return something
//This will return what we ended up removing from the array
//I dont know how useful it is but I thought it was something cool haha. 
console.log(shift);

//using the .pop method will remove the last element in that array.
const popped = friends.pop();
console.log(friends); 
console.log(popped);

//The .indexOf method will show you at what point a certain element is at in your array
console.log(friends.indexOf('Mario')); 
//Now lets say for example one of the so called friends of yours try to sneak back into the array. 
//This will output a -1 into your console because we removed this person from the array.
console.log(friends.indexOf('Aklilu')); 

//Another method you can use is the .includes this check if it is in the array and gives you back a true of false value
console.log(friends.includes('Mario')); 
console.log(friends.includes('Aklilu')); 

//Since it returns a true of false they are really useful in if statements
if(friends.includes('Mario')){
    console.log("You have a friend named Mario congratz!!!");
}