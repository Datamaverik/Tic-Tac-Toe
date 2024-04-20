import { checkWin, printResult } from "./src/checkWin.mjs";

let result = false;
let counter = 0;
let text = "X";

const gridButtons = document.querySelectorAll(".ttt-btn");
const resetBtn = document.getElementById("reset-btn");
const message = document.getElementById("result-msg");

window.onload = () => {
  counter = 0;
  message.textContent = "";
};

resetBtn.addEventListener("click", (e) => {
  location.reload();
});

Array.from(gridButtons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (counter % 2 !== 0) {
      text = "O";
      p2choices.push(e.target.value);
      result = checkWin(p2choices);
      if (result) {
        console.log(result);
        printResult(message, gridButtons, "Player   2   wins!", result);
      }
    } else {
      text = "X";
      p1choices.push(e.target.value);
      result = checkWin(p1choices);
      if (result) {
        console.log(result);
        printResult(message, gridButtons, "Player   1   wins!", result);
      }
    }
    e.target.textContent = text;
    counter++;
  });
});

const p1choices = [];
const p2choices = [];
