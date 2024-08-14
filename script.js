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
  console.log(firstNum, operator, secondNum);
  if (operator === "+") return add(firstNum, secondNum);
  if (operator === "-") return subtract(firstNum, secondNum);
  if (operator === "*") return multiply(firstNum, secondNum);
  if (operator === "/") return divide(firstNum, secondNum);
};

let isFirst = true;

clearBtn.addEventListener("click", () => {
  display.value = "";
  firstNum = 0;
  secondNum = 0;
  // operator = "";
  isFirst = true;
  calculations.innerHTML = "";
  clicked = false;

  firstDot = true;
  secondDot = true;
});

let clicked = false;

numBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    calculations.innerHTML += btn.innerHTML;
    if (isFirst) {
      firstNum += btn.innerHTML;
    } else {
      secondNum += btn.innerHTML;
      clicked = true;
    }
  });
});

operatorBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    isFirst = false;
    if (clicked) {
      if (firstNum === "0" || (secondNum === "0" && operator === "/")) {
        alert("Cannot divide by zero");
      }

      if ((firstNum === "00" || secondNum === "00") && operator === "/") {
        alert("cannot divide by zero");
        display.value = "Cannot Divide By Zero";
      } else {
        firstNum = operate(Number(firstNum), Number(secondNum), operator);
        secondNum = 0;
        display.value = firstNum;
      }
    }

    // if (operator === "*") {
    //   secondNum = 1;
    // } else {
    //   secondNum = 0;
    // }
    operator = btn.innerHTML;
    calculations.innerHTML += operator;
  });
});

answerBtn.addEventListener("click", () => {
  if ((firstNum === "00" || secondNum === "00") && operator === "/") {
    alert("cannot divide by zero");
    display.value = "Cannot Divide By Zero";
  } else {
    firstNum = operate(Number(firstNum), Number(secondNum), operator);
    if (operator === "*" || operator === "/") {
      secondNum = 1;
    } else {
      secondNum = 0;
    }
    // secondNum = 0;
    // display.value = operate(Number(firstNum), Number(secondNum), operator);
    display.value = firstNum;
  }
});

dotBtn.addEventListener("click", () => {
  if (isFirst) {
    if (!firstNum.includes(".")) {
      firstNum += ".";
      calculations.innerHTML += ".";
    }
  } else {
    if (!secondNum.includes(".")) {
      secondNum += ".";
      clicked = true;
      calculations.innerHTML += ".";
    }
  }
});

modulo.addEventListener("click", () => {
  if (isFirst) {
    firstNum *= 0.01;
    calculations.innerHTML = "";
    calculations.innerHTML = firstNum;
  } else {
    secondNum *= 0.01;
    calculations.innerHTML = secondNum;
    clicked = true;
  }
});
