function add(firstDigit, secondDigit) {
    return firstDigit+secondDigit
}

function subtract(firstDigit, secondDigit) {
    return firstDigit-secondDigit
}

function multiply(firstDigit, secondDigit) {
    return firstDigit*secondDigit
}

function divide(firstDigit, secondDigit) {
    if (secondDigit === 0) {
                alert("😡 Cannot divide by zero!");
        return null;
    }
    return firstDigit/secondDigit
}

function clear() {
firstOperand= ""
operatorSymbol= ""
secondOperand= ""
isFirstOperandComplete= false
result= null
hasCalculated= false
displayNumber.textContent="0"
shouldItReset= false
}

function operate(operatorSign,operandOne,operandTwo) {
switch(operatorSign){
    case "+":
       return add(operandOne,operandTwo);
    case "-": 
        return subtract(operandOne, operandTwo);
    case "*":
        return multiply(operandOne, operandTwo);
    case "/": 
    return divide(operandOne,operandTwo);
    default: 
    return "0";
}
}

function formatDisplayNumber(num) {
    const str = num.toString();

    if (Number.isInteger(num)) {
        return str.length <= 12 ? str : num.toExponential(5); 
    } else {
        
        let formatted = num.toString();
        
        if (formatted.length > 12) {
            formatted = num.toFixed(11).replace(/\.?0+$/, ''); 
        }

       
        if (formatted.length > 12) {
            formatted = num.toExponential(5);
        }

        return formatted;
    }
}


let firstOperand= ""
let operatorSymbol= ""
let secondOperand= ""
let isFirstOperandComplete= false

const padButtons = document.querySelectorAll(".pad.Button");
const displayNumber= document.querySelector("#calcDisplay");
const operatorButtons = document.querySelectorAll(".operator.Button");
const clearButton= document.querySelector("#clear")

clearButton.addEventListener("click", clear)

padButtons.forEach(button => {
    button.addEventListener("click", () => {

 const input = button.textContent;
 let maxDisplayLength= 12

        if (shouldItReset) {
            clear();
            displayNumber.textContent = input;
        }

        if (!isFirstOperandComplete) {

            if (firstOperand.length >= maxDisplayLength) return; // avoid display overflow

            if (input === "." && firstOperand.includes(".")) return; //Ignores further presses of dot to avoid multiple decimals

            if (input === "." && firstOperand === "") {
                firstOperand = "0.";
            
            } 
            else if (firstOperand === "0" && input !== ".") {
                 firstOperand = input; // Replace leading 0

            } else {
            firstOperand += input;
            }

                displayNumber.textContent = firstOperand;

        } 
        
        else {

            if (secondOperand.length >= maxDisplayLength) return;

            if (input === "." && secondOperand.includes(".")) return;

            if (input === "." && secondOperand === "") {
                secondOperand = "0.";
            } 

            else if (secondOperand=== "0" && input !== ".") {
                 secondOperand = input;

            } else {
            secondOperand += input;
            }

                displayNumber.textContent = secondOperand;
        }
    });
});

let result= null
let hasCalculated= false
let shouldItReset= false


operatorButtons.forEach(button=> {
    button.addEventListener("click", ()=> {
       if (isFirstOperandComplete && secondOperand !== "") {
            result = operate(operatorSymbol, +firstOperand, +secondOperand);

            if (result === null) {
                firstOperand = "";
                secondOperand = "";
                isFirstOperandComplete = false;
                hasCalculated = false;
                shouldItReset = false;
                return;
            }

            displayNumber.textContent = formatDisplayNumber(result); 
            firstOperand = result;
            secondOperand = "";
        }
        operatorSymbol = button.textContent;
        isFirstOperandComplete = true;
        hasCalculated = false;
        shouldItReset= false //this is here so chaining wont fail once this flag has been set to true when pressing operate
    
    })
})

const operateButton= document.querySelector("#calculateButton") 

operateButton.addEventListener("click", ()=> {

  if (secondOperand === "") return;

    result = operate(operatorSymbol, +firstOperand, +secondOperand);

    if (result === null) {
       
        firstOperand = "";
        secondOperand = "";
        isFirstOperandComplete = false;
        hasCalculated = false;
        shouldItReset = false;
        return;
    }
    

    displayNumber.textContent = formatDisplayNumber(result)
    firstOperand = result;
    secondOperand = "";
    hasCalculated = true;
    shouldItReset= true
})



