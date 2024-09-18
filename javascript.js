
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


backgroundTex(0);


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

            if (navBtns.id == "PvC") {

            }

            if (navBtns.id == "PvP") { }
        });
    });
}

navButtons();


// A N I M A T I O N

// Exit animation for the title screen 
function startAni() {

    gsap.to(".title", {
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