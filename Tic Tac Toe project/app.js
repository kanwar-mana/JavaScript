let boxes = document.querySelectorAll(".box");
let h1 = document.querySelector("h1");
let con = document.querySelector(".container");
let resetbtn = document.querySelector(".reset");
let newgame = document.querySelector(".new-game");
let newcontainer = document.querySelector(".new-container");
let msg = document.querySelector(".winner");
let body = document.querySelector("body");


let player0 = 0; // playerX, player0

let winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetBt = () => {
    player0 = true;
    enBtn();
    newcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (player0) {
            box.innerText = "O";
            player0 = false;
        } else {
            box.innerText = "X";
            player0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disBtn = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enBtn = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};


const showWinner = (winner) => {
    msg.innerText = `Congratulation! Winner is ${winner}`;
    newcontainer.classList.remove("hide");
    con.classList.add("hide");
    resetbtn.classList.add("hide");
    h1.classList.add("hide");
    body.classList.add("center");
    newgame.addEventListener("click", () => {
        resetBt();
        con.classList.remove("hide");
        h1.classList.remove("hide");
        resetbtn.classList.remove("hide");
        body.classList.remove("center");
    });

    disBtn();
};

const checkWinner = () => {
    for (let pattern1 of winpatterns) {
        let pos1 = boxes[pattern1[0]].innerText;
        let pos2 = boxes[pattern1[1]].innerText;
        let pos3 = boxes[pattern1[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("Winner is", pos1);
                showWinner(pos1);

            }
        }
    }
};
resetbtn.addEventListener("click", resetBt);