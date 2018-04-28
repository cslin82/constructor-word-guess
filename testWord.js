const Word = require('./Word.js');

var newWord = new Word('ALPHABET');


console.log(newWord + '');
// console.log(newWord.letterArray);

newWord.makeGuess('a');

console.log(newWord + '');
newWord.makeGuess('c');

console.log(newWord + '');
newWord.makeGuess('l');
newWord.makeGuess('p');
newWord.makeGuess('h');
newWord.makeGuess('b');
newWord.makeGuess('e');


console.log(newWord + '');

console.log(newWord.allGuessed());