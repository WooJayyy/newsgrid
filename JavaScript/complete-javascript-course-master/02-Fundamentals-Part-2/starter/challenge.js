// const calcAverage = (a, b, c) => (a + b + c) / 3;

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// const checkWinner = function(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if(avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log('No team wins...');
//   }
// }
// checkWinner(scoreDolphins, scoreKoalas);

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);

// checkWinner(scoreDolphins, scoreKoalas);

// const calcTip = function(bill) {
//   return bill >= 50 && bill <=300 ? bill * .15 : bill * .2;
// }

// const bills = [125, 555, 44]

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const total = [(bills[0]) + (tips[0]), (bills[1]) + (tips[1]), (tips[2]) + (bills[2])];

// console.log(bills, tips, total);

// const markMiller = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function() {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   }
// }

// const johnSmith = {
//   fullName: 'John Smith',
//   mass: 192,
//   height: 5.95,
//   calcBMI: function() {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   }
// }

// console.log(`${markMiller.fullName}'s BMI (${markMiller.calcBMI()}) is ${markMiller.calcBMI() > johnSmith.calcBMI() ? 'higher' : 'lower'} than ${johnSmith.fullName}'s (${johnSmith.calcBMI()})!`)

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = function(bills) {
//   return bills >= 50 && bills <=300 ? bills * .15 : bills * .2;
// }

// for (i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }

// console.log(bills);
// console.log(tips);
// console.log(totals);

// const calcAverage = function(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // sum = sum + arr[i];
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }

// console.log(calcAverage(totals));

const foods = ["pizza", "cheeseburger"];
foods.unshift("taco");

console.log("Exercise 3 Result: ", foods);

let favFood = foods[1];

console.log("Exercise 4 Result: ", favFood);

foods.splice(2, 0, "tofu");

console.log("Exercise 5 Result: ", foods);

foods.splice(1, 1, "sushi", "cupcake");

console.log("Exercise 6 Result: ", foods);

let yummy = foods.slice(1, 3);

console.log("Exercise 7 Result: ", yummy);

let soyIdx = foods.indexOf("tofu");

console.log("Exercise 8 Result: ", soyIdx);

let allFoods = foods.join();

console.log("Exercise 9 Result: ", allFoods);

let hasSoup = foods.includes("soup");

console.log("Exercise 10 Result: ", hasSoup);

/*
Exercise 11:
  - Use the forEach method to iterate through the provided nums array and add each odd number to a new array named odds.
  - Hint: Initialize the odds variable to an empty array before the iteration.
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

// Complete Exercise 11 below...

console.log("Exercise 11 Result: ", odds);

/*
Exercise 12:
  - Use the forEach method to iterate through the same nums array and add the number to arrays named fizz, buzz and/or fizzbuzz based upon the following:
  	- Add to the fizz array if the number is evenly divisible by 3.
  	- Add to the buzz array if the number is evenly divisible by 5.
  	- Add to the fizzbuzz array if the number is evenly divisible by 3 & 5.
*/

// Complete Exercise 12 below...

console.log("Exercise 12 Results:");
console.log("  fizz:", fizz);
console.log("  buzz:", buzz);
console.log("  fizzbuzz:", fizzbuzz);

/*
Exercise 13:
  - Given the below numArrays array of arrays (two-dimensional array), assign the last nested array to a variable named numList.
  - Assume you don't know how many nested arrays numArrays contains.
*/

const numArrays = [
  [100, 5, 23],
  [15, 21, 72, 9],
  [45, 66],
  [7, 81, 90],
];

console.log("Exercise 13 Result: ", numList);

/*
Exercise 14:
  - Given the above numArrays array, access the number 66 and assign to a variable named num.
*/

// Complete Exercise 14 below...

console.log("Exercise 14 Result: ", num);

/*
Exercise 15:
  - Given the above numArrays array, use nested forEach methods to sum up all the numbers contained within numArrays and assign to a variable named total.
  - Hint: Be sure to declare and initialize the total variable before the iterations.
*/

// Complete Exercise 15 below...

console.log("Exercise 15 Result: ", total);
