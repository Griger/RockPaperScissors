var answers = ['rock', 'paper', 'scissors'];
var playerScore = 0;
var computerScore = 0;
const buttons = document.querySelectorAll('button');
const results = document.querySelector('#results');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {playRound(button.textContent, computerPlay())});
})

function computerPlay() {
    return answers[Math.floor(Math.random() * answers.length)];
}

function playRound(playerSelection, computerSelection) {
    var playerFormatedAnswer = playerSelection.toLowerCase();
    var gameResult = "";

    var playerSelectionKey = answers.indexOf(playerFormatedAnswer);
    var computerSelectionKey = answers.indexOf(computerSelection);

    if (((playerSelectionKey + 1) % 3) == computerSelectionKey){
        gameResult = "You loose! " + computerSelection + " wins " + playerFormatedAnswer + ".";
        computerScore++;
    }
    else if (playerSelectionKey == computerSelectionKey)
        gameResult = "It's a die!";
    else{
        gameResult = "You win! " + playerFormatedAnswer + " wins " + computerSelection + ".";
        playerScore++;
    }

    results.textContent = gameResult;

    if(playerScore < 5 && computerScore < 5)
        results.textContent += " Player: " + playerScore + " Computer: " + computerScore;
    else if(playerScore >= 5)
        results.textContent = "You win!";
    else
        results.textContent = "You loose.";
}