function computerPlay() {
    let options = ["ROCK", "PAPER", "SCISSORS"];
    let index = Math.floor(Math.random() * 3);
    return options[index];
}
function playerPlay() {
    let validChoice = false;
    let userChoice;
    while (!validChoice) {
        userChoice = prompt("Select rock, paper, or scissors!");
        userChoice = userChoice.toUpperCase();
        validChoice = userChoice == "ROCK" ||
            userChoice == "SCISSORS" || userChoice == "PAPER";
        if (!validChoice) {
            alert("Make a valid choice!");
        }
    }
    return userChoice;
}
function declareWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It is a tie!";
    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER" ||
        playerSelection == "ROCK" && computerSelection == "SCISSORS" ||
        playerSelection == "PAPER" && computerSelection == "ROCK") {
        return "You Win!";
    } else {
        return "You Lose!";
    }
}
function outcome(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "";
    } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS" ||
        playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        return "Scissors cuts Paper!";
    } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS" ||
        playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        return "Rock smashes Scissors!"
    } else {
        return "Paper covers Rock!";
    }
}
let playRound = (playerSelection, computerSelection) =>
    declareWinner(playerSelection, computerSelection) + " " +
    outcome(playerSelection, computerSelection);
function round() {
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    return declareWinner(playerSelection, computerSelection);
}
function game() {
    const WINNER = 5;
    let yourWins = 0;
    let compWins = 0;
    let gameOver = false;
    while (!gameOver) {
        let currentWinner = round();
        if (currentWinner == "You Win!") {
            yourWins++;
        } else if (currentWinner == "You Lose!") {
            compWins++;
        }
        gameOver = yourWins == WINNER || compWins == WINNER;
    }
    if (yourWins == WINNER) {
        console.log("You were the first to " + WINNER + " wins!")
    } else {
        console.log("The computer was the first to " + WINNER + " wins!")
    }
}
game();