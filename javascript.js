
gameBoard = [];

// To reset the Game Board for the next Game
function gameBoardReset() {
    gameBoard = [];
    for (i = 0; i < 9; i++)
        gameBoard.push("");
}


// To get a computer generated opponent decision
function randomChoice() {

    compChoice = parseInt(Math.random() * 10)
    if (gameBoard[compChoice] == "")
        return compChoice

}


backgroundTex();


// B A C K G R O U N D

// Responsible for the background texture of the homepage
function backgroundTex() {

    const bg = document.querySelector(".bg");

    for (i = 0; i < 500; i++) {
        const x = document.createElement("div");
        bg.appendChild(x);
        x.textContent = rand();
        x.style.left = randBg("X") + "px";
        x.style.top = randBg("Y") + "px";
    }
}


// Gives a random "X" or "O" for the background texture
function rand() {
    if (Math.random() * 10 > 5)
        return "X";
    return "O";
};


// This function gives a random cordinate for the background texture
function randBg(str) {

    if (str == "X") {

        do {
            locate = Math.random() * 10000;
        }
        while (locate > 2000);

        return parseInt(locate);
    }
    else {

        do {
            locate = Math.random() * 1000;
        }
        while (locate > 1000);

        return parseInt(locate);
    }
}

// Selecting Navigation Buttons
function navButtons() {

    const navBtns = document.querySelectorAll(".homeNav");

    navBtns.forEach((navBtns) => {

        navBtns.addEventListener('click', () => {

            if (navBtns.id == "PvC") { 

            }

            if (navBtns.id == "PvP") { }

        });


    });
}

navButtons();

function startAni() {

    
}