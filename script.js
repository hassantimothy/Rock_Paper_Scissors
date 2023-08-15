let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const values = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * values.length);
    const answer = values[randomIndex];

    return answer;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result;

    if (playerSelection === computerSelection) {
        result = 'It\'s a draw!';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        result = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    } else {
        result = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    }

    document.getElementById('result').textContent = result;
    document.getElementById('score').textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
    
    if (playerScore >= 5) {
        document.getElementById('result').textContent = 'Congratulations! You win the game.';
        disableButtons();
    } else if (computerScore >= 5) {
        document.getElementById('result').textContent = 'Sorry, you lose the game.';
        disableButtons();
    }
}

function disableButtons() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}

document.getElementById('rock').addEventListener('click', () => playRound('rock', getComputerChoice()));
document.getElementById('paper').addEventListener('click', () => playRound('paper', getComputerChoice()));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors', getComputerChoice()));
