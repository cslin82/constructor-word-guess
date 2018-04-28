const Word = require('./Word.js');

var newWord = new Word('ALPHABET');


console.log(newWord + '');
// console.log(newWord.letterArray);

newWord.makeGuess('a');

console.log(newWord + '');
newWord.makeGuess('c');

console.log(newWord + '');
newWord.makeGuess('e');

console.log(newWord + '');