let computerWins = 0;
let playerWins = 0; 
let i = 1;

let computerHand;
let playerHand;

const buttons = document.querySelectorAll('.playerChoice');
let roundResult = document.getElementById('roundResult');
let gameResult = document.getElementById('gameResult');



buttons.forEach((button) => {
    button.addEventListener('click', () => {
        computerHand = computerPlay();
        playerHand = button.id;

        playRound(computerHand,playerHand);
        i++;

        if (computerWins == 5 || playerWins == 5) {
            winner();
            gameReset();
        }
    }
)});


function computerPlay() {
    let rng = Math.floor(Math.random()*3) + 1;
    let choice;
    rng == 1 ? choice = 'rock' :
    rng == 2 ? choice = 'paper':
    choice = 'scissors';
    return choice;
}
  

function playRound() {
    if (computerHand == playerHand) {
        roundResult.textContent = `Round ${i}: Tie! You both selected ${computerHand}. Go again!`;   
    }
    else if ( (computerHand == 'rock' && playerHand == 'scissors') || (computerHand == 'scissors' && playerHand == 'paper') || (computerHand == 'paper' && playerHand == 'rock') ) {
        roundResult.textContent = `Round ${i}: ${computerHand} beats ${playerHand}; computer wins!`;
        computerWins++;
    }
    else {
        roundResult.textContent = `Round ${i}: ${playerHand} beats ${computerHand}; player wins!`;
        playerWins++;
    }
    gameResult.style.opacity = 1;
    gameResult.textContent = `Computer: ${computerWins}\xa0\xa0\xa0Player: ${playerWins}`;
}


function winner() { 
    if (computerWins > playerWins) {
        gameResult.textContent = `Computer wins the game with ${computerWins} points to ${playerWins}.`;
    }
    else {
        gameResult.textContent = `Player wins the game with ${playerWins} points to ${computerWins}.`;
    }  
}