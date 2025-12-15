

const resultDisplay = document.getElementById('result');
const historyDisplay = document.getElementById('history');
let currentInput = "";


console.log("%c Code Calc Limited ", "background: #007bff; color: #fff; padding: 5px; border-radius: 5px;");

function append(value) {
  // Prevent multiple operators styling issues
  if (['+', '-', '*', '/', '%'].includes(value) && currentInput === "") return;
  
  currentInput += value;
  resultDisplay.innerText = currentInput;
}

function clearScreen() {
  currentInput = "";
  resultDisplay.innerText = "0";
  historyDisplay.innerText = "";
}

function deleteLast() {
  currentInput = currentInput.toString().slice(0, -1);
  resultDisplay.innerText = currentInput || "0";
}

function calculate() {
  try {
    if(currentInput === "") return;
    
    // Evaluate logic
    historyDisplay.innerText = currentInput + " =";
    let calculation = eval(currentInput); // Standard calc logic
    
    // Check for decimal length
    if (!Number.isInteger(calculation)) {
        calculation = calculation.toFixed(4);
    }
    
    resultDisplay.innerText = calculation;
    currentInput = calculation.toString();
    
    console.log("Calculation Successful");
    
  } catch (error) {
    resultDisplay.innerText = "Error";
    setTimeout(() => {
      resultDisplay.innerText = currentInput;
    }, 1500);
  }
}