// calculator elements
const numBtns = document.querySelectorAll(".btn");
const operatorBtns = document.querySelectorAll(".operators");

const clearBtn = document.querySelector(".c");
const answerBtn = document.querySelector(".equals");
const addBtn = document.querySelector(".plus");

let calculations = document.querySelector(".calculations");
const display = document.querySelector(".display");

const modulo = document.querySelector(".modulo");
const toggleBtn = document.querySelector(".toggle-pos");

const dotBtn = document.querySelector(".dot");

// init variables
let firstNum = 0;
let secondNum = 0;
let operator = "";

// operations
const add = function (a, b) {
  return parseFloat(a + b);
};
const subtract = function (a, b) {
  return a - b;
};
const multiply = function (a, b) {
  return a * b;
};
const divide = function (a, b) {
  return a / b;
};

document.querySelector(".display").value = "";

const operate = (firstNum, secondNum, operator) => {
  console.log(firstNum, secondNum, operator);
  if (operator === "+") return add(firstNum, secondNum);
  if (operator === "-") return subtract(firstNum, secondNum);
  if (operator === "*") return multiply(firstNum, secondNum);
  if (operator === "/") return divide(firstNum, secondNum);
};

clearBtn.addEventListener(
  "click",
  () => (
    (display.value = ""),
    (firstNum = 0),
    (secondNum = 0)((calculations.textContent = ""))((operator = ""))
  )
);

numBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (
      display.value == "+" ||
      display.value == "-" ||
      display.value == "*" ||
      display.value == "/"
    ) {
      display.value = "";
    }
    display.value += btn.innerHTML;
  });
});

let isFirst = true;

operatorBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (isFirst) {
      firstNum = Number(display.value);
      isFirst = false;
    } else {
      secondNum = Number(display.value);
    }
    display.value = "";
    operator = btn.innerHTML;

    firstNum = operate(firstNum, secondNum, operator);
  });
});

answerBtn.addEventListener("click", () => {
  const answer = operate(firstNum, secondNum, operator);
  console.log(answer);
});
