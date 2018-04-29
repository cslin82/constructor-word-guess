const Word = require('./Word.js');
const inquirer = require('inquirer');

var target;
var targetWord;

const wordList = ["Addison Road", "Anacostia", "Archives",
    "Arlington Cemetery", "Ballston MU", "Benning Road", "Bethesda",
    "Braddock Road", "Branch Avenue", "Brookland CUA",
    "Capitol Heights", "Capitol South", "Cheverly", "Clarendon", "Cleveland Park",
    "College Park University of Maryland", "Columbia Heights", "Congress Heights",
    "Court House", "Crystal City", "Deanwood", "Dunn Loring", "Dupont Circle",
    "East Falls Church", "Eastern Market", "Eisenhower Avenue", "Farragut North",
    "Farragut West", "Federal Center SW", "Federal Triangle", "Foggy Bottom GWU",
    "Forest Glen", "Fort Totten", "Franconia Springfield", "Friendship Heights",
    "Gallery Place", "Georgia Avenue Petworth", "Glenmont", "Greenbelt",
    "Greensboro", "Grosvenor Strathmore", "Huntington", "Judiciary Square",
    "King Street Old Town", "LEnfant Plaza", "Landover", "Largo Town Center",
    "McLean", "McPherson Square", "Medical Center", "Metro Center",
    "Minnesota Avenue", "Morgan Boulevard", "Mount Vernon Square",
    "Navy Yard Ballpark", "Naylor Road", "New Carrollton", "NoMa Gallaudet U",
    "Pentagon", "Pentagon City", "Potomac Avenue", "Prince Georges Plaza",
    "Rhode Island Avenue Brentwood", "Rockville",
    "Ronald Reagan Washington National Airport", "Rosslyn", "Shady Grove",
    "Shaw Howard University", "Silver Spring", "Smithsonian", "Southern Avenue",
    "Spring Hill", "Stadium Armory", "Suitland", "Takoma", "Tenleytown AU",
    "Twinbrook", "Tysons Corner", "U Street", "Union Station", "Van Dorn Street",
    "Van Ness UDC", "Vienna", "Virginia Square GMU", "Waterfront",
    "West Falls Church", "West Hyattsville", "Wheaton", "White Flint",
    "Wiehle Reston East", "Woodley Park"]; 

// Select a word from the given list
function randomWord(wordList) {
    var index = Math.floor(Math.random() * wordList.length);
    return wordList[index];
}

targetWord = randomWord(wordList)

target = new Word(targetWord);


var guesses = [];


const questions = [
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
    target.makeGuess(' ');
    console.log(target + '');
    inquirer.prompt(questions).then(answers => {
        let currentGuess = answers.letterGuessed.toLowerCase();
        
        if (guesses.indexOf(currentGuess) === -1) {
            guesses.push(currentGuess);
            target.makeGuess(currentGuess);
        } else {
            console.log('you already guessed', currentGuess);
            
        }
        if (!target.allGuessed()) {
            console.log('guesses so far:', guesses.join(' '));

            ask();
        } else {
            console.log(targetWord, 'is correct!');
        }
    });
}

ask();

