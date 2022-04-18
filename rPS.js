function computerPlay(){
    let which = [0, 1, 2];
    return which[Math.floor(Math.random()*3)];
}

//to randomly generates rock(0), paper(1), scissors(2)//


let question = prompt('Rock? Paper? Scissors?').toLowerCase()

//to get question from the user in lower case//

function change2Int(){
    let input = question;
    if (input === 'rock') {
        return 0;
    } else if (input === 'paper') {
        return 1;
    } else {
        return 2;
    }
}

//to change the user's input to number corresponding to 0, 1, 2 as computer's//


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


let playerSelection = change2Int();
let computerSelection = computerPlay();

console.log(oneRound(playerSelection, computerSelection));


