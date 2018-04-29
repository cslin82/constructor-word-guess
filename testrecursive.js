const inquirer = require('inquirer');

const target = 'a';

var guesses = [];


var questions = [
    {
        name: 'letterGuessed',
        message: 'Guess a letter',
        validate: function (value) {
            var valid = (value.length === 1) && ('abcdefghijklmnopqrstuvwxyz'.indexOf(value.charAt(0).toLowerCase()) !== -1); // fix letter logic later
            return valid || 'Please enter a single letter';
        }

    }
];

function ask() {
    inquirer.prompt(questions).then(answers => {
        let currentGuess = answers.letterGuessed.toLowerCase();
        
        if (guesses.indexOf(currentGuess) === -1) {
            guesses.push(currentGuess);
        } else {
            console.log('you already guessed', currentGuess);
            
        }
        if (currentGuess !== target) {
            console.log(guesses);

            ask();
        } else {
            console.log('correct');
        }
    });
}

ask();

