
gameBoard = [];

// To reset the Game Board for the next Game
function gameBoardReset() {
    gameBoard = [];
    for (i = 0; i < 9; i++)
        gameBoard.push("");
}

console.log(gameBoard);

// To get a computer generated opponent decision
function randomChoice() {

    compChoice = parseInt(Math.random() * 10)
    if (gameBoard[compChoice] == "")
        return compChoice

}
