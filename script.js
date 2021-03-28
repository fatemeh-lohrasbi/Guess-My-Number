'use strict';
//secret number
let secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);    
    //when there is no input
    if (!guess) {
        document.querySelector('.message').textContent =
            'No number!🤔 ';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!🎉💃'
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = 'too high 📈';
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = 'too low 📉';
    }
});