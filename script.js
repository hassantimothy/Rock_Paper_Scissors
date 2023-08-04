function getComputerChoice() {
    const values = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * values.length);
    const answer = values[randomIndex];

    return answer;
}
const computerChoice = getComputerChoice();
console.log('Computer chose:', computerChoice);

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats scissors';
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'Draw';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose! Paper beats rock';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose! Rock beats scissors';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beats paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'Draw';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats rock';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose! Scissors beats paper';
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'Draw';
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        const playerSelection = prompt(`Round ${i}: Enter your choice (rock, paper, or scissors):`).toLowerCase();
        const computerSelection = getComputerChoice();
        
        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes('win')) {
            playerScore++;
        } else if (result.includes('lose')) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log('Congratulations! You win the game.');
    } else if (computerScore > playerScore) {
        console.log('Sorry, you lose the game.');
    } else {
        console.log('It\'s a tie! The game is a draw.');
    }
}

game();