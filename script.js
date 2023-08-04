function getComputerChoice() {
    const values = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * values.length);
    const answer = values[randomIndex];

    console.log(answer);
}

getComputerChoice(); // Call the function to get a random choice