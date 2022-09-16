// let js = ('amazing');
// console.log(40 + 8 + 23 - 10);

// Math operators
// const now = 2021
// const ageJay = now - 1991;
// const ageIvy = now - 2018;
// console.log(ageJay, ageIvy);

// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
// console.log(ageJay * 2, ageJay / 10, 2 ** 3);

// const firstName = 'Jay';
// const lastName = 'Lin';
// console.log(firstName + ' ' + lastName);

// // Assignment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x= x * 4 = 100
// x++; // x = x + 1
// x--;
// x--;
// console.log(x);

// // Comparison operators
// console.log(ageJay < ageIvy); // >, <, >=, <=
// console.log(ageIvy >= 18);

// const isFullAge = ageIvy >= 18;

// console.log(now - 1991 > now - 2018);

// const firstName = 'Jay';
// const job = 'Coder';
// const birthYear = 1991;
// const yearNow = 2021;

// const jay = "I'm" + ' ' + firstName + ', a ' +(yearNow - birthYear) + ' years old ' + job
// console.log(jay);

// const jayNew = `I'm ${firstName}, a ${yearNow - birthYear} years old ${job}!`;
// console.log(jayNew);

// console.log(`just a regular string`);

// console.log('string with \n\multiple \n\lines');

// console.log(`string with
// multiple
// lines again`);

// let age = 30;

// if(age >= 18) {
//   console.log('Jay can start driving license 😍');
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Jay is too young, wait another ${yearsLeft} years 😘`);
// }

// const birthYear = 2018;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));

console.log((23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');

// 5 falsy values: 0, '', undefined, null, NaN

// let height = 0;
// if (height) {
//   console.log('OK');
// } else {
//   console.log('NOT OK')
// }

// const age = '18'; // this 18 is string
// if (age === 18) console.log('You are adult (strict)');
// if (age == 18) console.log('You are adult (loose)');

// const favorite = Number(prompt("What's your favorite number?"));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) { // 23 === 23
//   console.log ('FANTASTIC!!! 23 is a cool number')
// } else if (favorite === 7) {
//   console.log('7 is also a cool number')
// } else {
//   console.log('Number is not 23 or 7')
// }

// if (favorite !== 23) console.log('Why not 23?')

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision); // and
console.log(hasDriversLicense || hasGoodVision); // or
console.log(!hasDriversLicense); // not

const shouldDrive = hasDriversLicense && hasGoodVision;

// if(hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!')
// } else {
//   console.log('Someone else should drive...')
// }

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!')
} else {
  console.log('Someone else should drive...')
}

// const teamDolphin = (96 + 108 + 89) / 3;
// const teamKoala = (88 + 91 + 110) / 3;

// if(teamDolphin > teamKoala) {
//   console.log('Dolphins won the trophy!!!')
// } else if(teamDolphin < teamKoala) {
//   console.log('Koalas won the trophy!!!')
// } else if(teamDolphin === teamKoala) {
//   console.log('Both team won the trophy!!!')
// }

const day = 'friday';

switch(day) {
  case 'monday': /// day = monday
    console.log('oh no its monday')
    console.log('ok fine its monday')
    break;
  case 'tuesday':
    console.log('oh yeah tuesday came')
    break;
  case 'wednesday':
  case 'thursday':
    console.log('friday is coming up soon!')
    break;
  case 'friday':
    console.log('today is the last day of work!')
    break;
  case 'saturday':
  case 'sunday':
    console.log('enjoy the weekend')
    break;
  default:
    console.log('not a valid day')
}

if(day === 'monday') {
  console.log('oh no its monday')
  console.log('ok fine its monday')
} else if(day === 'tuesday') {
  console.log('oh yeah tuesday came')
} else if(day === 'wednesday'  || day === 'thursday') {
  console.log('friday is coming up soon!')
} else if(day === 'friday') {
  console.log('today is the last day of work!')
} else if(day === 'saturday' || day === 'sunday') {
  console.log('enjoy the weekend')
} else {
  console.log('not a valid day')
}

const age = 30;
age >= 18 ? console.log('I like to drink wine') :
 console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)

