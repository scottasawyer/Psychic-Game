// Establish an array that contains each letter of the alphabet
var alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

// Declaring variables for # of wins, # of losses, # of guesses remaining, an array for letters guesses so far.
// Wins and Losses start with a value of zero. Guesses starts at 10.
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];

// This function runs whenever the user presses a key on their keyboard and the key returns to the up position.
document.onkeyup = function (event) {
    console.log(event);
    var userGuess = event.key;
    lettersGuessed.push(userGuess);

    // Randomly generates a number that will become the computer's letter.
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

    // If loop to determine if the player guess matches the computer choice. Should also restart after win or loss.
    if (userGuess === computerGuess) {
        alert('Well done. You have picked the correct letter!');
        wins++;
        guessesLeft = 10;
        lettersGuessed = [];
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    } else {
        guessesLeft--;
    }
    if (guessesLeft === 0) {
        alert('Alas, your letter picking skills leave something to be desired. Try Again?');
        losses++;
        lettersGuessed = [];
        guessesLeft = 10;
    }
// This will update the text the user sees as the game
    document.getElementById('wins').innerHTML = 'Wins: ' + wins;
    document.getElementById('losses').innerHTML = 'Losses: ' + losses;
    document.getElementById('guessesLeft').innerHTML =
        'Guesses Left: ' + guessesLeft;
    document.getElementById('lettersGuessed').innerHTML =
        'Your Guesses so Far: ' + lettersGuessed + ' ';
};