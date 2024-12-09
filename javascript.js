
gameBoard = [];
backgroundTex(0);
navButtons();
gameBoardReset();
gamePlay();
let tl = gsap.timeline();
let turn = 1;
winner = "";



// To reset the Game Board for the next Game
function gameBoardReset() {
    gameBoard = [];
    const boardElements = document.querySelectorAll(".boardDiv");

    boardElements.forEach((boardElements) => {
        boardElements.innerHTML = "";
    });
    for (i = 0; i < 9; i++)
        gameBoard.push(i);
}


function gamePlay() {

    const boardElements = document.querySelectorAll(".boardDiv")

    boardElements.forEach((boardElements) => {

        boardElements.addEventListener("mouseover", () => {
            if (gameBoard[boardElements.id.slice(2, 3)] < 10) {
                boardElements.style.color = "#a1a1a1";
                boardElements.innerHTML = "X";
            }
        })


        boardElements.addEventListener("mouseout", () => {
            if (gameBoard[boardElements.id.slice(2, 3)] < 10) {
                boardElements.innerHTML = "";
            }
        })

        boardElements.addEventListener("click", () => {


            if (gameBoard[boardElements.id.slice(2, 3)] < 10) {
                boardElements.style.color = "#151314";
                boardElements.innerHTML = "X";
                gameBoard[boardElements.id.slice(2, 3)] = 100;
            }

            if (gameChecker(gameBoard)) {
                winner = "X";
                turns();
                return;
            }

            
            const computer = randomChoice(gameBoard);
            const ele = document.querySelector("#bd" + computer)
            ele.style.color = "#151314";
            ele.innerHTML = "0";
            gameBoard[computer] = 200;

            if (gameChecker(gameBoard)) {
                winner = "O";
                turns();
                return;
            }


        })
    });
}


// To get a computer generated opponent decision
function randomChoice(gameBoard) {

    let compChoice = 100;

    while (compChoice > 8) {
        compChoice = parseInt(Math.random() * 10);
        if (gameBoard[compChoice] > 10)
            compChoice = 100
    }

    return compChoice
}


// Check Every possible way for the W
function gameChecker(gBoard) {

    i = 0;
    j = 0;

    // This loop checks the horizontal and vertical winning possibilities
    while (i < 9) {

        if (gBoard[j] == gBoard[j + 3] && gBoard[j + 3] == gBoard[j + 6])
            return true;

        if (gBoard[i] == gBoard[i += 1] && gBoard[i] == gBoard[i += 1])
            return true;

        i += 1;
        j += 1;
    }

    // Diagonal possibilities
    if (gBoard[0] == gBoard[4] && gBoard[4] == gBoard[8])
        return true;


    if (gBoard[2] == gBoard[4] && gBoard[4] == gBoard[6])
        return true;

}

// Game Play

function turns() {

    if (turn > 3) {
        alert("Game over");
        turn = 0;
    }
    
    if (winner == "X") {
        document.querySelector("#p1" + turn).innerHTML = 1;
        document.querySelector("#c1" + turn).innerHTML = 0;
    } else {
        document.querySelector("#p1" + turn).innerHTML = 0;
        document.querySelector("#c1" + turn).innerHTML = 1;
    }

    turn = turn + 1;
    
    gameBoardReset();
    console.log(turn);
}

// B A C K G R O U N D

// Responsible for the background texture of the homepage and removes it when needed
function backgroundTex(check) {

    const bg = document.querySelector(".bg");

    if (check == 0) {
        for (i = 0; i < 500; i++) {
            const x = document.createElement("div");
            bg.appendChild(x);
            x.textContent = rand();
            x.style.left = randBg("X") + "px";
            x.style.top = randBg("Y") + "px";
            x.style.opacity = "0.8"
        }
    }
    else {
        bg.innerHTML = "";
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

        // Hover Animation 

        navBtns.addEventListener('mouseover', () => {

            gsap.to("#" + navBtns.id, {
                fontSize: "4vw"
            });

        });

        navBtns.addEventListener('mouseout', () => {

            gsap.to("#" + navBtns.id, {
                fontSize: "3vw"
            });
        });


        // Exit Animation initiation 
        navBtns.addEventListener('click', () => {

            startAni();
            buttonfade();
            mainContentIntro();

        });
    });
}



// A N I M A T I O N

// Exit animation for the title screen 
function startAni() {

    tl.to(".title", {
        fontSize: "3rem",
        margin: "15px",
        ease: "circ.out",
        duration: 2
    });

    gsap.to(".bg div", {
        color: "transparent",
        duration: 2,
        onComplete: () => {
            backgroundTex();
        }
    })

}

// This function removes the navigation from the DOM and removes them
function buttonfade() {
    const nav = document.querySelector(".navigations");

    gsap.to(".homeNav", {
        display: "none",
        opacity: "0",
        duration: 1,
        onComplete: () => {
            nav.remove();
        }
    });

}

function mainContentIntro() {

    tl.to(".mainContent", {
        display: "flex",
        stagger: 1
    });


    tl.from(".mainContent", {
        y: 1000,
        stagger: 1,
        duration: 1
    });

    // tl.from(".game", {
    //     y: 1000,
    //     stagger: 1,
    //     duration: 1
    // });
}

