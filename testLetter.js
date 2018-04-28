const Letter = require('./Letter.js');

var newLetter = new Letter('a');
var newLetterCap = new Letter('A');
var newLetterCapB = new Letter('B');

console.log(newLetter + '');
console.log(newLetterCap + '');
console.log(newLetterCapB + '');

console.log('guessing b for all');

newLetter.makeGuess('b');
newLetterCap.makeGuess('b');
newLetterCapB.makeGuess('b');
console.log(newLetter + '');
console.log(newLetterCap + '');
console.log(newLetterCapB + '');



console.log('guessing A for all');

newLetter.makeGuess('A');
newLetterCap.makeGuess('A');
newLetterCapB.makeGuess('A');
console.log(newLetter + '');
console.log(newLetterCap + '');
console.log(newLetterCapB + '');
