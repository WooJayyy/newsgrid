let markWeight = 78
let markHeight = 1.69
let johnWeight = 92
let johnHeight = 1.95

// let markWeight = 95
// let markHeight = 1.88
// let johnWeight = 85
// let johnHeight = 1.76

// let markBMI = markWeight / markHeight ** 2;
// let johnBMI = johnWeight / johnHeight ** 2;

// const markHigherBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI, markHigherBMI);

// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})!`);
// } else {
//   console.log(`Mark's BMI (${markBMI}) is lower than John's BMI (${johnBMI})!`);
// }

const teamDolphin = (97 + 112 + 101) / 3;
const teamKoala = (109 + 95 + 106) / 3;

if(teamDolphin > teamKoala && teamDolphin >= 100) {
  console.log('Dolphins won the trophy!!!')
} else if(teamDolphin < teamKoala && teamKoala >= 100) {
  console.log('Koalas won the trophy!!!')
} else if(teamDolphin === teamKoala && teamDolphin >= 100 && teamKoala >= 100) {
  console.log('Both team won the trophy!!!')
} else {
  console.log('No one wins the trophy...')
}

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * .15 : bill * .2;
console.log(`the bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);