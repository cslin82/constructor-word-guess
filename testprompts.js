const inquirer = require('inquirer');

const target = 'a';

var guesses = [];

inquirer.prompt([
    /* Pass your questions in here */
    {
        name: 'letterGuessed',
        message: 'Guess a letter',
        validate: function (value) {
            var valid = ((value.length) === 1);
            return valid || 'Please enter a single character';
        }

    }
]).then(answers => {
    console.log(answers);
    guesses.push(answers.letterGuessed);
    console.log(answers.letterGuessed === target);
    console.log(guesses);
    

});