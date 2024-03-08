let boxes = document.querySelectorAll(".box");
let msg_container = document.querySelectorAll(".msg_container");
let reset = document.querySelector("#reset");
let msg = document.querySelector("#msg");
let newbtn = document.querySelector("#new-btn");

let playerX = true;
const winpatrn = [
  [0, 1, 2],
  [1,2,3],
  [4,5,6],
  [5,6,7],
  [8,9,10],
  [9,10,11],
  [12,13,14],
  [13,14,15],
  [0,4,8],
  [4,8,12],
  [1,5,9],
  [5,9,13],
  [2,6,10],
  [6,10,14],
  [3,7,11] ,
  [7,11,15],
  [1,6,11],
  [0,5,10],
  [5,10,15],
  [4,9,14],
  [8,5,2],
  [12,9,6],
  [9,6,3],
  [13,10,11],
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


 