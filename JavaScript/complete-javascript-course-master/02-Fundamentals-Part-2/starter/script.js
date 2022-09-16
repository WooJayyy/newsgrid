'use strict';

//  let hasDriversLicense = false;
//  const passTest = true;

//  if (passTest) hasDriversLicense = true;
//  if (hasDriversLicense) console.log('I can drive~!!!')

//  // strict mode reseves some words such as interface, private, if, etc. to avoid future bugs

//  function logger() {
//    console.log('My name is Jay');
//  }

//  // calling / running / invoking function
//  logger();
//  logger();
//  logger();

//  function fruitProcessor(apples, oranges) {
//    console.log(apples, oranges);
//    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//    return juice;
//  }

//  const appleJuice = fruitProcessor(5, 0);
//  console.log(appleJuice);

//  const appleOrangeJuice = fruitProcessor(2, 4);
//  console.log(appleOrangeJuice);


// //  Function declaration
//  function calcAge1(birthYear) {
//    return 2021 - birthYear;
//  }

//  const age1 = calcAge1(1991);
//  console.log(age1);

// //  Function expression
//  const calcAge2 = function (birthYear) {
//   return 2021 - birthYear;
//  }

//  const age2 = calcAge2(1991);
//  console.log(age2);


//  // arrow function
//  const calcAge3 = birthYear => 2021 - birthYear;
//  const age3 = calcAge3(1991);
//  console.log(age3)

//  const yearsUntilRetirement = (birthYear, firstName) => {
//    const age = 2021 - birthYear;
//    const retirement = 65 - age;
//   //  return retirement;
//    return `${firstName} retires in ${retirement} years`;
//  }

//  console.log(yearsUntilRetirement(1991, 'Jay'));
//  console.log(yearsUntilRetirement(2018, 'Ivy'));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

//  function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangesPieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} pieces of apple and ${orangesPieces} pieces of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function(birthYear) {
//   return 2021 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if(retirement > 0) {
//       return `${firstName} retires in ${retirement} years`;
//     } else {
//       return `${firstName} has retired for ${age - 65} years already`;
//     }
// }
// console.log(yearsUntilRetirement(1991, 'Jay'));
// console.log(yearsUntilRetirement(1953, 'Jay SR'));

// const friend1 = 'Michael';
// const friend2 = 'Aaron';
// const friend3 = 'Jay';

// const friends = ['Michael', 'Aaron', 'Jay'];
// console.log(friends);

// const year = new Array(1991, 2018, 2021);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Dee'; // you can change values in Array
// console.log(friends);

// const firstName = 'Jay'
// const jay = [firstName, 'Lin', 2021 - 1991, 'coder', friends];
// console.log(jay);

// const calcAge = function(birthYear) {
//   return 2021 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0])
// const age2 = calcAge(years[1])
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

// Add elements to Array
// const friends = ['Michael', 'Aaron', 'Dee'];
// const newLength = friends.push('Jay'); // last
// console.log(friends);
// console.log(newLength);

// friends.unshift('Eddie'); // fisrt
// console.log(friends);

// // Remove elements from Array
// friends.pop(); // last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // first
// console.log(friends);

// console.log(friends.indexOf('Aaron'));
// console.log(friends.indexOf('Kayle'));

// friends.push(23);
// console.log(friends.includes('Aaron'));
// console.log(friends.includes('Kayle'));
// console.log(friends.includes(23));

// if(friends.includes('Aaron')) {
//   console.log('You have a friend called Aaron');
// }

// const jay = {
//   firstName: 'Jay',
//   lastName: 'Lin',
//   age: 2021 - 1991,
//   job: 'coder',
//   friends: ['Aaron', 'Dee', 'Michael']
// }
// console.log(jay);
// console.log(jay.lastName);
// console.log(jay['lastName']);

// const nameKey = 'Name';
// console.log(jay['first' + nameKey]);
// console.log(jay['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jay? Choose between firstName, lastName, age, job, and friends!');
// if (jay[interestedIn]) {
//   console.log(jay[interestedIn]);
// } else {
//   console.log('Wrong request! Choose between firstName, lastName, age, job, and friends!')
// }

// jay.location = 'New York';
// jay['wechat'] = 'L84SMASH';
// console.log(jay);

// console.log(`${jay.firstName} has ${jay.friends.length} friends, and his best friend is called ${jay.friends[0]}`);

// const jay = {
//   firstName: 'Jay',
//   lastName: 'Lin',
//   birthYear: 1991,
//   job: 'coder',
//   friends: ['Aaron', 'Dee', 'Michael'],
//   hasDriversLicense: true,
//   calcAge: function () {
//     this.age = 2021 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function() {
//     return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no' } driver's license.`
//   }
// };

// console.log(jay.calcAge());
// // console.log(jay['calcAge']());
// console.log(jay.getSummary());

// console.log('Lifting weights repetition 1🦾')
// console.log('Lifting weights repetition 2🦾')
// console.log('Lifting weights repetition 3🦾')
// console.log('Lifting weights repetition 4🦾')
// console.log('Lifting weights repetition 5🦾')
// console.log('Lifting weights repetition 6🦾')
// console.log('Lifting weights repetition 7🦾')
// console.log('Lifting weights repetition 8🦾')
// console.log('Lifting weights repetition 9🦾')
// console.log('Lifting weights repetition 10🦾')

// for loop keeps running while condition is true
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}🦾`)
// }

// const jay = [
//   'Jay',
//   'Lin',
//   2021 - 1991,
//   'coder',
//   ['Aaron', 'Dee', 'Michael'],
//   true
// ];
// const types = [];


// // console.log(jay[0]);
// // console.log(jay[1]);
// // ...
// // console.log(jay[4]);

// for(let i = 0; i < jay.length; i++) {
//   // Reading from jay array
//   console.log(jay[i], typeof jay[i]);
//   // filling types array
//   // types[i] = typeof jay[i];
//   types.push(typeof jay[i]);
// }

// console.log(types);

// const years = [1969, 1990, 1991, 2018, 2021];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2021 - years[i]);
// }

// console.log(ages)

// // continue and break
// console.log('--- ONLY STRINGS ---')
// for(let i = 0; i < jay.length; i++) {
//   if (typeof jay[i] !== 'string') continue;
//   console.log(jay[i], typeof jay[i]);
// }

// console.log('--- BREAK BEFORE NUMBER FOUND ---')
// for(let i = 0; i < jay.length; i++) {
//   if (typeof jay[i] === 'number') break;
//   console.log(jay[i], typeof jay[i]);
// }

// for (let exercise = 1; exercise <= 3; exercise++) { 
//   console.log(`---Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Lifting weight repetition ${rep}🦾`);
//   }
// }

// for loop again
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}🦾`)
// }
// comparing to while loop
// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: Lifting weights repetition ${rep}🦾`)
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log('Loop is about to end...')
// }