let generateButton = document.getElementById("Pass-generate");
let firstPass = document.getElementById("first-pass");
let secondPass = document.getElementById("second-pass");
let radio_off = document.getElementById("radioOff");
let radio_on = document.getElementById("radioOn");
let passLength = document.getElementById("passLength");
let passHigh = document.getElementById("pass-high");
let passLow = document.getElementById("pass-low");
let historyList = document.getElementById("history-list");
let historyBtn = document.getElementById("history-btn");
let clearBtn = document.getElementById("clear-btn");
let uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let symbols = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
let history = [];
let characters = [uppercase, lowercase, numbers, symbols];
let chooseChar = 0;
let isNumberAndSymbol = true;
let x = 4;
radio_on.checked = true;
let canWeCopy = false;
passLength.textContent = 15;
function randpass() {
  firstPass.textContent = "";
  secondPass.textContent = "";
  if (isNumberAndSymbol == false) {
    x = 2;
  }
  if (isNumberAndSymbol == true) {
    x = 4;
  }

  finish = false;
  for (let i = 0; i < passLength.textContent; i++) {
    let numberofitems = 26;
    chooseChar = Math.floor(Math.random() * x);
    if (chooseChar === 2) {
      numberofitems = 10;
    }
    if (chooseChar === 3) {
      numberofitems = 29;
    }
    pass1 = Math.floor(Math.random() * numberofitems);
    pass2 = Math.floor(Math.random() * numberofitems);
    firstPass.textContent += characters[chooseChar][pass1];
    secondPass.textContent += characters[chooseChar][pass2];
  }
  history.push(firstPass.textContent);
  history.push(secondPass.textContent);
}

generateButton.addEventListener("click", function () {
  randpass();
  canWeCopy = true;
});

radio_off.addEventListener("click", function () {
  isNumberAndSymbol = false;
});
radio_on.addEventListener("click", function () {
  isNumberAndSymbol = true;
});
firstPass.addEventListener("click", function () {
  if (canWeCopy == true) {
    navigator.clipboard.writeText(firstPass.textContent);
    alert("Password 1 copied");
  }
});
secondPass.addEventListener("click", function () {
  if (canWeCopy == true) {
    navigator.clipboard.writeText(secondPass.textContent);
    alert("Password 2 copied");
  }
});
passHigh.addEventListener("click", function () {
  passLength.textContent++;
});
passLow.addEventListener("click", function () {
  passLength.textContent--;
});
historyBtn.addEventListener("click", function () {
  historyList.textContent = " ";
  for (let i = 0; i < history.length; i++) {
    historyList.textContent += " 🔓" + history[i];
    // historyList.textContent = history[0];
  }
});
clearBtn.addEventListener("click", function () {
  historyList.textContent = "";
  // historyList.textContent = history[0];
});
