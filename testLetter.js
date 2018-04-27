const Letter = require('./Letter.js');

var newLetter = new Letter('a');

console.log(newLetter + '');
newLetter.makeGuess('b');
console.log(newLetter + '');
newLetter.makeGuess('a');
console.log(newLetter + '');
