'use strict';

document.querySelector('.check').addEventListener('click',function(){
   const guess =Number(document.querySelector('.guess').value);
   console.log(guess); 

//when there is no input
   if(!guess){
       document.querySelector('.message').textContent =
       "No number!🤔 ";
   }
});