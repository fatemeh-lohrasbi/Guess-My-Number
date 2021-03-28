'use strict';
//secret number
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    //when there is no input
    if (!guess) {
        document.querySelector('.message').textContent =
            'No number!🤔 ';
        //when player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!🎉💃'
        //when guess is too heigh
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'too high 📈';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game😥';
            document.querySelector('.score').textContent = 0;
        }
        //when guess is too low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'too low 📉';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game😥';
            document.querySelector('.score').textContent = 0;
        }
    }
});