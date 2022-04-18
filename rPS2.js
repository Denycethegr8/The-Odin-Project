function computerPlay(){
    let which = ["Rock", "Paper", "Scissors"];
    return which[Math.floor(Math.random()*3)];
}

function oneRound(playerSelection, computerSelection){
    if (playerSelection.length === computerSelection.length){
        return 'Draw!';
    } else if (playerSelection.length - computerSelection.length === 1 || playerSelection.length - computerSelection.length === -2) {
        return 'You win!';
    } else { return 'I win!'}
}

oneRound(prompt('Rock? Paper? Scissors?', computerPlay()));