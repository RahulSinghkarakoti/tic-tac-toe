let boxes = document.querySelectorAll(".box");
let msg_container = document.querySelectorAll(".msg_container");
let reset = document.querySelector("#reset");
let msg = document.querySelector("#msg");
let newbtn = document.querySelector("#new-btn");

let playerX = true;
const winpatrn = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];


const disablebox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};


const enablebox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
    msg_container.forEach((container) => container.classList.add("hide"));
  }
};


const showinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msg_container.forEach((container) => container.classList.remove("hide"));
  disablebox();
};


const resetgame = () => {
  playerX = true;
  enablebox();
};


const checkwinner = () => {
  for (let pattern of winpatrn) {
    let pos0val = boxes[pattern[0]].innerHTML;
    let pos1val = boxes[pattern[1]].innerHTML;
    let pos2val = boxes[pattern[2]].innerHTML;

    if (pos0val != "" && pos1val != "" && pos2val != "") {
      if (pos0val === pos1val && pos1val === pos2val) {
        console.log("winner");
        showinner(pos0val);
      }
    }
  }
};


boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box clicked");
    if (playerX) {
      box.innerHTML = "X";
      playerX = false;
    } else {
      box.innerHTML = "O";
      playerX = true;
    }
    box.disabled = true;

    checkwinner();
  });
});


reset.addEventListener("click", resetgame);
newbtn.addEventListener("click", resetgame);


 