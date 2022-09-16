'use sctrict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔄 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔄 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔄 Substitution'],
  [72, '🔄 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// // 1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2.
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3.
// const time = [...gameEvents.keys()].pop();
// console.log(`An event happened, on
// average, every ${time / gameEvents.size} minutes`);

// // 4.
// for (const [i, el] of gameEvents) {
//   const half = i <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${i}: ${el}`);
// }

/*
// Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL

// Coding Challenge #1
 We're building a football betting app (soccer for my American friends �)!
 Suppose we get data from a web service about a certain game ('game' variable on
 next page). In this challenge we're gonna work with that data.
 Your tasks:
 1. Create one player array for each team (variables 'players1' and
 'players2')
 2. The first player in any player array is the goalkeeper and the others are field
 players. For Bayern Munich (team 1) create one variable ('gk') with the
 goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
 field players
 3. Create an array 'allPlayers' containing all players of both teams (22
 players)
 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
 new array ('players1Final') containing all the original team1 players plus
 'Thiago', 'Coutinho' and 'Perisic'
 5. Based on the game.odds object, create one variable for each odd (called
 'team1', 'draw' and 'team2')
 6. Write a function ('printGoals') that receives an arbitrary number of player
 names (not an array) and prints each of them to the console, along with the
 number of goals that were scored in total (number of player names passed in)
 7. The team with the lower odd is more likely to win. Print to the console which
 team is more likely to win, without using an if/else statement or the ternary
 operator.
 Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
 Then, call the function again with players from game.scored
 GOOD LUCK �

// 1.
 const players1 = [game.team1, game.players[0]];
 console.log(players1);
 const players2 = [game.team2, game.players[1]];
 console.log(players2);
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
 const gk1 = game.team1;
 const gk2 = game.team2;
 console.log(gk1, gk2);
 const fieldPlayers1 = players1[1];
 const fieldPlayers2 = players2[1];
 console.log(fieldPlayers1, fieldPlayers2);
const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;
console.log(gk1, fieldPlayers1, gk2, fieldPlayers2);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5.
 const team1 = game.odds[0];
 const draw = game.odds[1];
 const team2 = game.odds[2];
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team1 is more likely to win');
team1 > team2 && console.log('Team2 is more likely to win');

Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}

// 1.
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3.
const team = Object.keys(game.odds);
for (const [team, odds] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odds}`);
}

// 4.
let scorers = {};
let goals = [];
let players = game.scored;

for (const player of players) {
  if (goals.includes(player)) {
    scorers[player]++;
  } else {
    scorers[player] = 1;
    goals.push(player);
  }
}
console.log(scorers);

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

 underscore_case
  first_name
 Some_Variable
   calculate_AGE
 delayed_departure
*/

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(44);
  console.log(output);
}
