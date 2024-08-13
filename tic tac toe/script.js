let boxes = document.querySelectorAll(".box");
let newGameBtn = document.querySelector("#new-game");
let resetGamebtn = document.querySelector("#reset-game");
let player1 = true;
let clickCount = 0;
let messageElement= document.querySelector("h2");

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const lockGameButtons = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const unlockGameButtons = () => {
  boxes.forEach((box) => {
    box.disabled = false;
  });
};

const matchDrawMassage = () => {
  messageElement.innerText = `OPPS!!\n this match is a draw no one won`;
  messageElement.style.visibility = "visible";
};

const matchWinningMassage = (p) => {
  messageElement.innerText = ` \u{1F389} Congratulations!!! \u{1F389} \n Player ${p} Won The Game `;
  messageElement.style.visibility = "visible";
};

const resetGameAndNewGameFunction = () => {
  player1 = true;
  unlockGameButtons();
  clickCount = 0;
  messageElement.style.visibility = "hidden";
  
  boxes.forEach((box) => {
    box.innerText = "";
  });
};
newGameBtn.addEventListener("click", resetGameAndNewGameFunction);
resetGamebtn.addEventListener("click", resetGameAndNewGameFunction);


boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (player1) {
      box.innerText = "X";
      box.style.color = "red";
      player1 = false;
    } else {
      box.innerText = "O";
      box.style.color = "green";
      player1 = true;
    }
    clickCount++;
    box.disabled = true;
    if(clickCount===9){
      matchDrawMassage();
      clickCount=0;
    }
    winningCondition();
  });
});

const winningCondition = () => {
  for (let pattern of winningPatterns) {
    let position1Value = boxes[pattern[0]].innerText;
    let position2Value = boxes[pattern[1]].innerText;
    let position3Value = boxes[pattern[2]].innerText;

    if (position1Value != "" && position2Value != "" && position3Value != "") {
      if (
        position1Value == position2Value &&
        position2Value == position3Value
      ) {
       matchWinningMassage(position1Value);
        lockGameButtons();
      }
    }
  }
};
