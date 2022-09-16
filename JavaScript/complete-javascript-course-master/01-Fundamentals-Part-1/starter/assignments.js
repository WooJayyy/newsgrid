let country = ('United States');
let continent = ('North America');
let population = 3295;

// console.log(country);
// console.log(continent);
// console.log(population);

let isIsland = false;
let language = 'Korean'
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// const country = 'United States';
// const continent = 'North America';
// const isIsland = false;

// console.log(population / 2);
// population++;
// console.log(population);
// console.log(population > 6);
// console.log(population < 3300);
// const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
// console.log(description);

// const descriptionNew = `${country} is in ${continent}, and it's ${population} million people speak ${language}!`
// console.log(descriptionNew)

// if (population >= 3300) {
//   console.log(`${country}'s population is above average`);
// } else {
//   console.log(`${country}'s population is ${3300 - population} million below average`);
// }

// console.log('9' - '5'); // 4
// console.log('19' - '13' + '17'); // 617
// console.log('19' - '13' + 17); // 23
// console.log('123' < 57); // false
// console.log(5 + 6 +'4' + 9 - 4 - 2); // 1143

// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// if (numNeighbours === 1) {
//   console.log('Only 1 border!')
// } else if (numNeighbours > 1) {
//   console.log('WOW! More than 1 border!')
// } else {
//   console.log('No borders')
// }

if(language === 'English' && population < 5000 && !isIsland) {
  console.log(`You should live in ${country}!`)
} else {
  console.log(`${country} does not meet your criteria...`)
}

switch(language) {
  case 'Chinese':
  case 'Mandarin':
    console.log('China #1')
    break;
  case 'Spanish':
    console.log('Second most popular language in the world')
    break;
  case 'English':
    console.log('Third place')
    break;
  case 'Hindi':
    console.log('4')
    break;
  case 'Arabic':
    console.log('5')
    break;
  default:
    console.log('FUCK YOU')
}

console.log(`${country}'s population is ${population > 3300 ? 'above' : 'below'} average`);