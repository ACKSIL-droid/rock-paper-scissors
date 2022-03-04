let computerWins = 0;
let playerWins = 0; 
let i = 1;

let computerHand;
let playerHand;

const gameSpace = document.getElementById('gamespace');
    const announcer = document.getElementById('announcer');
    const buttons = document.querySelectorAll('.playerchoice');
    let disappear = document.querySelectorAll('.disappear');
    let versus = document.getElementById('versus');
    let computer = document.getElementById('computer');

const resultSpace = document.getElementById('resultspace');
    resultSpace.style.display = "none";
    const finalResult = document.getElementById('finalresult');
    const playAgain = document.getElementById('playagain');

const footer = document.getElementById('footer');
    const roundResult = document.getElementById('roundresult');
    const scorer = document.getElementById('scorer');
    const nextRound = document.getElementById('nextround');
    nextRound.disabled = true;


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        computerHand = computerPlay();
        playerHand = button.id;
        
        e.target.classList.add('visible');
        e.target.classList.remove('zoom');
        e.target.disabled = true;

        playRound(computerHand,playerHand);
        animateRound();
        i++;

        if (computerWins == 5 || playerWins == 5) {
            winner();
        }
    }
)});

nextRound.addEventListener('click', () => {
    roundReset();
});

playAgain.addEventListener('click', () => {
    document.location.reload(true);
});


function computerPlay() {
    let rng = Math.floor(Math.random()*3) + 1;
    let choice;
    switch (rng) {
        case 1:
            choice = 'rock';
        break;
        case 2:
            choice = 'paper';
        break;
        case 3:
            choice = 'scissors';
    }
    return choice;
}


function playRound() {
    announcer.textContent = `Round ${i}!`;
    if (computerHand == playerHand) {
        roundResult.textContent = `Tie! You both selected ${computerHand}. Go again!`;   
    }
    else if ( (computerHand == 'rock' && playerHand == 'scissors') || (computerHand == 'scissors' && playerHand == 'paper') || (computerHand == 'paper' && playerHand == 'rock') ) {
        roundResult.textContent = `${computerHand.charAt(0).toUpperCase() + computerHand.slice(1)} beats ${playerHand}; computer wins!`;
        computerWins++;
    }
    else {
        roundResult.textContent = `${playerHand.charAt(0).toUpperCase() + playerHand.slice(1)} beats ${computerHand}; player wins!`;
        playerWins++;
    }
    scorer.style.opacity = 1;
    scorer.textContent = `Computer: ${computerWins}\xa0\xa0\xa0Player: ${playerWins}`;
}

function animateRound() {

    buttons.forEach((button) => {
        if (!button.classList.contains('visible')) {
            button.classList.add('invisible');
        }
        //if (button.classList.contains('winner)) {change style, border, zoom}
    });
    versus.style.display = 'block';
    computer.style.display = 'block';
    nextRound.style.opacity = '1';
    nextRound.disabled = false;
    
    switch (computerHand) {
        case 'rock':
            computer.src="./img/computer-rock.png";
        break;
        case 'paper':
            computer.src="./img/computer-paper.png";
        break;
        case 'scissors':
            computer.src="./img/computer-scissors.png";
        break;
    }
}

function winner() { 
    gameSpace.style.display = 'none';
    footer.style.display = 'none';
    resultSpace.style.display = 'block';

    if (computerWins > playerWins) {
        finalResult.textContent = `Computer wins the game with ${computerWins} points to ${playerWins}.`;
    }
    else {
        finalResult.textContent = `Player wins the game with ${playerWins} points to ${computerWins}.`;
    }  
}

function roundReset () {
    buttons.forEach((button) => {
    if (button.classList.contains('visible') || button.classList.contains('invisible')) {
        button.classList.remove('visible');
        button.classList.remove('invisible');
    }
    if (button.disabled = true) {
        button.disabled = false;
    }
    });
    versus.style.display = 'none';
    computer.style.display = 'none';
    nextRound.style.opacity = 0;
    nextRound.disabled = true;
}

