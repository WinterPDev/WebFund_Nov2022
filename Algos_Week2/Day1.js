

// Math library lets us do a series of Math functions built into JS, we do not need to install anything to use Math.

// Floor will always round down, even if greater than .5.
var floor = Math.floor(1.8);
// Ciel will always round up, even if lower than .5
var ceiling = Math.ceil(Math.PI);

// random will get a random value in the range of 0.01 and 0.99
var random = Math.random();

console.log(floor);
console.log(ceiling);
console.log(random);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Checking withina 1 in 6 chance, how can we use random to check against 6 possible numbers?
function d6() {
    var roll = Math.random();
    // your code here
    return roll;
}

var playerRoll = d6();
console.log("The player rolled: " + playerRoll);


var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];
