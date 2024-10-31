// Generate secret number
let secretNumber = Math.floor(Math.random() * 20) + 1;


document.querySelector('.check').addEventListener('click', function(){
    let userGuess = document.querySelector('.guess').Value;
    alert(userGuess);
})