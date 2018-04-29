# constructor-word-guess
Object-oriented CLI Hangman game using node.js

## Task

Using two objects, Letter and Word, make a Hangman-style word guess game. When invoked from command line, pick a random word, display placeholders for the letters. Prompt the player for letter guesses. If correct, display the word with placeholders filled in. If incorrect, reduce the number of incorrect guesses remaining.

## Objects

`Letter` takes a single character in its constructor. It has `.character` and `.guessed` for the underlying character and whether it has been correctly guessed. Its `.toString()` method returns the character if guessed, and a placeholder ('_') if not. Its `.makeGuess()` method takes a string (which should be a single letter), and sets `.guessed` to true if correct.

`Word` takes a string to represent a word in its constructor. It has `.letterArray[]` to hold the array of `Letter` objects representing the letters that make up the `Word`. Its `.toString()` method returns the component letters or placeholders, separated by spaces. Its `.makeGuess()` method takes a letter and passes it to each `Letter`. The `.allGuessed()` method checks whether every letter has been guessed correctly, which is the win condition.

## Concepts and technologies

* Node.js, command-line applications
* NPM for JS library management
* Custom Node.js modules
* Inquirer.js for interactive prompting
* New: Object constructor functions (optionally could assign methods via prototypes)
* New: Object-oriented design
* New: Recursion for the prompt cycle (though using Inquirer's rxjs foundation could be more elegant)
* New: Asynchronous programming
* ES5 and avoiding for loops: Array.forEach and Array.every
* ES6 to be fancy: arrow functions (but not nested ones... yet)
* Writing better README.md files

## Reused things

* Metro station names and randomWord function from Hangman game
* (Optional) Fisher-Yates shuffle to randomize words without repeat (would require logic to either reshuffle or exit on exhausting the word list)

## Enhancements

* Use rxjs instead of recursion
* Load word list dynamically
* ASCII/ANSI/text art to show hangman
* Chalk for terminal color
