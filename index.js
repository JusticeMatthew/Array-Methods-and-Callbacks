import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Investigate the data above. Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

const finals2014 = fifaData.filter(function(item) {
    return item["Year"] === 2014 && item["Stage"] === "Final";
})

//(a) Home Team name for 2014 world cup final
console.log(finals2014[0]["Home Team Name"]);
//(b) Away Team name for 2014 world cup final
console.log(finals2014[0]["Away Team Name"]);
//(c) Home Team goals for 2014 world cup final
console.log(finals2014[0]["Home Team Goals"]);
//(d) Away Team goals for 2014 world cup final
console.log(finals2014[0]["Away Team Goals"]);
//(e) Winner of 2014 world cup final */
if (finals2014[0]["Home Team Goals"] > finals2014[0]["Away Team Goals"]) {
    console.log(finals2014[0]["Home Team Name"]);
} else {
    console.log(finals2014[0]["Away Team Name"]); 
}

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
   const finalsData = data.filter(item => item["Stage"] === "Final");
   return finalsData;
}

// console.log(getFinals(fifaData));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(finalsCB) {
    let years = finalsCB.map(item => item["Year"]);
    return years;
}

// console.log(getYears(getFinals(fifaData)));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(finalsCB) {
    let winners = []
    const winnerFunc = finalsCB.forEach(item => {
        if (item["Home Team Goals"] > item["Away Team Goals"]) {
            winners.push(item["Home Team Name"]);
        } else if (item["Away Team Goals"] > item["Home Team Goals"]) {
            winners.push(item["Away Team Name"])
        }    
    })
    return winners;
}

// console.log(getWinners(getFinals(fifaData)));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(data, winnersCB, yearsCB) {
    let stringos = [];
    winnersCB(getFinals(data)).map(function(item, index) {
        stringos.push(`In ${winnersCB(getFinals(data))[index]}, ${yearsCB(getFinals(data))[index]} won the world cup!`);
    })
    return stringos;  
}

// console.log(getWinnersByYear(fifaData, getWinners, getYears));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const goals = data.reduce(function(accum, item) {
        return accum + (item["Home Team Goals"] + item["Away Team Goals"]);
    }, 0);

    return (goals / data.length).toFixed(2);
}

// console.log(getAverageGoals(fifaData))

/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, initials) {
    const gamesWon = data.reduce(function(acc, item) {
        if (initials === item["Home Team Initials"] && item.Stage === "Final" && item["Home Team Goals"] > item["Away Team Goals"]) { 
            return acc + 1;
        }
        if (initials === item["Away Team Initials"] && item.Stage === "Final" && item["Home Team Goals"] < item["Away Team Goals"]) {
            return acc + 1;
        }
        return acc
    }, 0)
    return gamesWon; 
}

// console.log(getCountryWins(fifaData, "BRA"));

/* Working version but with no .reduce -- created before I figured out the solution above*/

// function getCountryWins(data, initials) {
//     let count = 0;
//     const gamesWon = data.forEach(item => {
//         if ((initials === item["Home Team Initials"] && item["Stage"] === "Final" && item["Home Team Goals"] > item["Away Team Goals"])) {
//             count += 1;
//         } else if (initials === item["Away Team Initials"] && item["Stage"] === "Final" && item["Home Team Goals"] < item["Away Team Goals"]) {
//             count += 1;
//         }
//     })
//     return count;
// }

// console.log(getCountryWins(fifaData, "BRA")); 

/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}