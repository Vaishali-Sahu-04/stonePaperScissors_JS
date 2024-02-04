let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");
const yourScore=document.querySelector("#yourScore");
const comppScore=document.querySelector("#compScore");
const resetBtn=document.querySelector("#reset");

const getCompChoice = () => {
    const options = [ "stone", "paper", "scissor"];
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
}
const drawGame=()=>{
    msg.innerText="The game was a draw";
    msg.style.backgroundColor="#081b31"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        yourScore.innerText=userScore;
        msg.innerText = `Congratulations,Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        comppScore.innerText=compScore;
        msg.innerText = `Your ${userChoice} lost by ${compChoice}`;
         msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    const compChoice = getCompChoice();
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
         if(userChoice==="stone"){
            userWin = compChoice==="paper" ? false : true;
        }
        else if(userChoice==="paper"){
            userWin = compChoice==="scissor" ? false : true;
        }
        else{
            userWin = compChoice==="stone" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
});

resetBtn.addEventListener("click", () => {
    yourScore.innerText=0;
    comppScore.innerText=0;
    msg.innerText="Play your move";
    msg.style.backgroundColor="#081b31";
})