const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");

let currentInput = "";
let previousInput = "";
let operator = "";

const updateDisplay = (value) => {
  if (value === "NaN") {
    display.style.color = "red";
    display.value = "Error";
    return;
  }
  display.value = value || "0";
};

const handleButtonClick = (value) => {
  if (!isNaN(value) || value === ".") {
    currentInput += value;
    updateDisplay(currentInput);
  } else if (["+", "-", "*", "/"].includes(value)) {
    if (currentInput) {
      previousInput = currentInput;
      currentInput = "";
    }
    operator = value;
    updateDisplay(operator);
  }
};

const calculateResult = () => {
  if (currentInput && previousInput && operator) {
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    switch (operator) {
      case "+":
        currentInput = (num1 + num2).toString();
        break;
      case "-":
        currentInput = (num1 - num2).toString();
        break;
      case "*":
        currentInput = (num1 * num2).toString();
        break;
      case "/":
        currentInput = num2 !== 0 ? (num1 / num2).toString() : "Error";
        break;
    }
    previousInput = "";
    operator = "";
    updateDisplay(currentInput);
  }
};

const clearCalculator = () => {
  currentInput = "";
  previousInput = "";
  operator = "";
  updateDisplay("");
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");
    handleButtonClick(value);
  });
});

equalsButton.addEventListener("click", calculateResult);
clearButton.addEventListener("click", clearCalculator);

updateDisplay("");
