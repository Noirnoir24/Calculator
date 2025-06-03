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
        return "Cannot divide by zero dummy";
    }
    return firstDigit/secondDigit
}

function clear() {
firstOperand= ""
operatorSymbol= ""
secondOperand= ""
displayNumber.textContent= "0"
isFirstOperandComplete= false
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

let firstOperand= ""
let operatorSymbol= ""
let secondOperand= ""
let isFirstOperandComplete= false

const padButtons = document.querySelectorAll(".pad.Button");
const displayNumber= document.querySelector("#calcDisplay");
const operatorButtons = document.querySelectorAll(".operator.Button");

padButtons.forEach(button => {
    button.addEventListener("click", () => {

        if (hasCalculated && !isFirstOperandComplete) {
            firstOperand = "";
            hasCalculated = false;
        } else if (hasCalculated && isFirstOperandComplete) {
            secondOperand = "";
            hasCalculated = false;
        }

        if(!isFirstOperandComplete) {
            firstOperand+= button.textContent
            if(firstOperand=== ".") {
                firstOperand= "0."
            }
            displayNumber.textContent= firstOperand
        }

        else {
            secondOperand+= button.textContent
                        if(secondOperand=== ".") {
                secondOperand= "0."
            }
            displayNumber.textContent= secondOperand
        }
    });
});

let result= null
let hasCalculated= false


operatorButtons.forEach(button=> {
    button.addEventListener("click", ()=> {
       if (isFirstOperandComplete && secondOperand !== "") {
            result = operate(operatorSymbol, +firstOperand, +secondOperand);
            displayNumber.textContent = result;
            firstOperand = result;
            secondOperand = "";
        }
        operatorSymbol = button.textContent;
        isFirstOperandComplete = true;
        hasCalculated = false;
    
    })
})

const operateButton= document.querySelector("#calculateButton") 

operateButton.addEventListener("click", ()=> {
    result = operate(operatorSymbol, +firstOperand, +secondOperand);
    displayNumber.textContent = result;
    firstOperand = result;
    secondOperand = "";
    hasCalculated = true;
})



