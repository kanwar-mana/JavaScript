let human = 0;
let computer = 0;

let choices = document.querySelectorAll(".box");

const genCompchoice = () => {
    let option = ["rock", "paper", "scissor"];
    const ranIdx = Math.floor(Math.random() * 3);
    return option[ranIdx];
};

const playGame = (userchoice) => {
    console.log("User choice is =", userchoice);
    //generate comp choice
    const compChoice = genCompchoice();
    console.log("Computer choice is =", compChoice);

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});