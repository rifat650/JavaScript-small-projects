let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choices");
const massage=document.querySelector("#msg-text");
const computerScorePara=document.querySelector("#bot-score");
const userScorePara=document.querySelector("#user-score");

const drawGame = (userChoice) => {
    massage.innerText=`match is draw both you and computer choosed ${userChoice} `;
    massage.style.background="orange";
}


const generateComChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}


const showWinner = (userWin,userChoice,comChoice) => {
  if (userWin) {
    massage.innerText=`You won the game your ${userChoice} beats computers ${comChoice} `;
    massage.style.background="green";
    userScore++;
    userScorePara.innerText=userScore;
  } else {
    massage.innerText=`You lost the game your ${userChoice}  gets beaten by computers ${comChoice} `;
    massage.style.background="red";
    computerScore++;
    computerScorePara.innerText=computerScore;

  }
}


const playGame = (userChoice) => {
  const comChoice = generateComChoice();
  console.log("computer choice", comChoice);

  if (userChoice === comChoice) {
    drawGame(userChoice);
  } else {
    let userWin = true;
    if (userChoice == "rock") {
      userWin = comChoice === "paper" ? false : true;
    } else if (userChoice == "paper") {
      userWin = comChoice === "scissor" ? false : true;
    } else if (userChoice == "scissor") {
      userWin = comChoice === "rock" ? false : true;
    }
    showWinner(userWin,comChoice,userChoice);
  }
}



choices.forEach((eachChoice) => {
  eachChoice.addEventListener("click", () => {
    const userChoice = eachChoice.getAttribute("id");
    console.log(` user choice ${userChoice}`);
    playGame(userChoice);
  });
});
