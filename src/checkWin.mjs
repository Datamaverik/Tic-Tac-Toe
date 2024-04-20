export function checkWin(choices) {
  choices.sort((a, b) => a - b);
  let str = "";
  let result = false;
  if (choices.length < 3) return result;
  for (let i = 2; i < choices.length; i++) {
    str = choices[i - 2] + choices[i - 1] + choices[i];
    result = winCont(str);
  }
  return result;
}

function winCont(str) {
  if (
    str === "123" ||
    str === "456" ||
    str === "789" ||
    str === "147" ||
    str === "258" ||
    str === "369" ||
    str === "159" ||
    str === "357"
  ) {
    return str;
  } else {
    return false;
  }
}

export function printResult(message, gridButtons, text, reuslt) {
  message.textContent = text;
  message.style.opacity = 1;
  Array.from(gridButtons).forEach((btn) => {
    btn.disabled = true;
  });
  for (let i = 0; i < 3; i++) {
    let char = reuslt[i];
    console.log(parseInt(char));
    Array.from(gridButtons).forEach((btn) => {
      if (btn.value === char) {
        btn.style.boxShadow =
          "inset 2px 2px 8px black, inset -2px -2px 8px black";
      }
    });
  }
}
