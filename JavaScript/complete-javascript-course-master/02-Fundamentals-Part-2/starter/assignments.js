// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} millions people and it's capital city is ${capitalCity}!`;
// }

// const unitedStates = describeCountry('United States', 328.5, 'Washington D.C.');
// console.log(unitedStates)

// const china = describeCountry('China', 1400, 'BeiJing');
// console.log(china);

// const maldives = describeCountry('Maldives', .54, 'Male');
// console.log(maldives);

// function percentageOfWorld1(country, population) {
//   return `${country} has ${population} millions of population, which is about ${population / 7900 * 100} percent of population in the world!`;
// }

// console.log(percentageOfWorld1('China', 1400));
// console.log(percentageOfWorld1('United States', 328.5));
// console.log(percentageOfWorld1('Maldives', .54));

// const percentageOfWorld2 = function (country, population) {
//   const percentage = population / 7900 * 100;
//   return `${country} has ${population} millions of population, which is about ${percentage} percent of population in the world!`;
// }

// console.log(percentageOfWorld2('China', 1400));
// console.log(percentageOfWorld2('United States', 328.5));
// console.log(percentageOfWorld2('Maldives', .54));

// const percentageOfWorld3 = (country, population) => `${country} has ${population} millions of population, which is about ${population / 7900 * 100} percent of population in the world!`;

// console.log(percentageOfWorld3('China', 1400));
// console.log(percentageOfWorld3('United States', 328.5));
// console.log(percentageOfWorld3('Maldives', .54));

// const populations = [1400, 328.5, .54, 13]
// console.log(populations.length === 4);

// function percentageOfWorld1(population) {
//   return population / 7900 * 100;
// }
// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3])
// ];
// console.log(percentages);

// const neighbours = ['Canada', 'Mexico'];

// neighbours.push('Utopia');
// console.log(neighbours);

// neighbours.pop('');
// console.log(neighbours);

// if(!neighbours.includes('Germany')) {
//   console.log('Probably not a cental European country');
// }

// neighbours[neighbours.indexOf('Canada')] = 'Republic of Canada';
// console.log(neighbours);

// const myCountry = {
//   country: 'United States',
//   capital: 'Washington D.C.',
//   language: 'English',
//   population: 328.5,
//   neighbours: ['Canada', 'Mexico']
// }
// console.log(myCountry)

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

// myCountry.population += 2;
// console.log(myCountry.population);
// myCountry['population'] -= 2;
// console.log(myCountry.population);

// for (let vote = 1; vote <= 50; vote++) {
//   console.log(`Voter number ${vote} is currently voting.`)
// }

// const populations = [1400, 328.5, .54, 13]
// const percentages2 = [];

// for (let i = 0; i < populations.length; i++) {
//   percentages2.push(populations[i] / 7900 * 100);
// }

// console.log(populations, percentages2);

// const listOfNeighbours = [
//   ['Canada', 'Mexico'],
//   ['Spain'], 
//   ['Norway', 'Sweden', 'Russia'],
// ];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//   for (let y = 0; y < listOfNeighbours[i].length; y++)
//   console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
// }

// const populations = [1400, 328.5, .54, 13]
// const percentages3 = [];
// let i = 0; 
// while (i < populations.length) {
//   percentages3.push(populations[i] / 7900 * 100);
//   i++;
// }

// console.log(populations, percentages3);