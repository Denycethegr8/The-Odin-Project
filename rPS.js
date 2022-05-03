
//randomly generate rock(0), paper(1), scissors(2)

let computerPlay = function(){
    let result = ''
    if (Math.floor(Math.random()*3) === 0){
        result = 'rock';
    } else if (Math.floor(Math.random()*3) === 1){
        result = 'paper';
    } else {
        result = 'scissors';
    } return result;
}

//one round of rock paper scissors

let playerScore = 0;
let computerScore = 0;
function oneRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        console.log('Draw!');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('You win!');
        playerScore++;
    } else { 
        console.log('I win!');
        computerScore++;
    }
}


//play game n times

function multipleRounds(n){
    for (let i = 0; i < n; i++){
        oneRound(prompt('Rock? Paper? Scissors?').toLowerCase(), computerPlay())
    } 
    if (playerScore === computerScore){
        return 'Draw! Good game!'
    } else if (playerScore > computerScore){
        return 'You win! Congrats!'
    } else return 'I win! Good game!'
}


//ask user how many rounds of game they would like to play before run the function

multipleRounds(prompt('How many games would you like to play?'));