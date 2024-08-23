let human = 0;
let computer = 0;

let choices = document.querySelectorAll(".box");
let result = document.querySelector(".move");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let human1 = document.querySelector(".human");
let computer1 = document.querySelector(".Computer");

let count = 0;
let counttwo = 0;

const incrementNum = (one) => {
    count++;
    one.innerText = count;
};
const incrementNumtwo = (two) => {
    counttwo++;
    two.innerText = counttwo;
};

const showWinner = (userwin, result) => {
    let num = 0;
    if (userwin) {
        console.log("Human is Winner..");
        result.innerHTML = "<p>You Win...</p>";
        result.style.backgroundColor = "yellow";
        incrementNum(one);

    } else {
        console.log("Computer is Winner..");
        result.innerHTML = "<p>You Lost...</p>";
        result.style.backgroundColor = "red";
        incrementNumtwo(two);
    }
};

const drawGame = (result) => {
    console.log("Game was draw...");
    result.innerHTML = "<p>Game was draw..</p>";
    result.style.backgroundColor = "white";
}

const genCompchoice = () => {
    let option = ["rock", "paper", "scissor"];
    const ranIdx = Math.floor(Math.random() * 3);
    return option[ranIdx];
};

const playGame = (userchoice, result) => {
    console.log("User choice is =", userchoice);
    human1.innerText = `Human = ${userchoice}`;
    //generate comp choice
    const compchoice = genCompchoice();
    console.log("Computer choice is =", compchoice);
    computer1.innerText = `Computer = ${compchoice}`;

    if (userchoice === compchoice) {
        drawGame(result);
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            //scissor,paper
            userwin = compchoice === "paper" ? false : true;
        } else if (userwin === "paper") {
            //rock,scissor
            userwin = compchoice === "scissor" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin, result);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice, result);
    });
});