function computerPlay(){
    if (Math.floor(Math.random()*3) === 0){
        return 'rock';
    } else if (Math.floor(Math.random()*3) === 1){
        return 'paper';
    } else return 'scissors';
}


let player = prompt('Rock? Paper? Scissors?')

//to randomly generates rock(0), paper(1), scissors(2)//


function oneRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return 'Draw!';
    } else if (playerSelection - computerSelection === 1 || playerSelection - computerSelection === -2) {
        return 'You win!';
    } else { 
        return 'I win!';
    }
}

//to compare the number converted from user's input with the computer's //

console.log(oneRound(player, computerPlay()));

