// Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:
var Letter = function(character) {
    console.log('making a new Letter:', character);
    
    this.character = character;
    this.guessed = false;

    this.toString = function() {
        return this.guessed ? this.character : '_';
    }

    this.makeGuess = function(newGuess) {
        if (this.character.toLowerCase() === newGuess.toLowerCase()) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;

// A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed yet
// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

