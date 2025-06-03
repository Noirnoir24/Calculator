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
isFirstOperandComplete= false
result= null
hasCalculated= false
displayNumber.textContent="0"
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
        if(shouldItReset) {
            clear()
            displayNumber.textContent=button.textContent
            shouldItReset=false
        }

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
let shouldItReset= false


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
        shouldItReset= false //this is here so chaining wont fail once this flag has been set to true when pressing operate
    
    })
})

const operateButton= document.querySelector("#calculateButton") 

operateButton.addEventListener("click", ()=> {
    result = operate(operatorSymbol, +firstOperand, +secondOperand);
    displayNumber.textContent = result;
    firstOperand = result;
    secondOperand = "";
    hasCalculated = true;
    shouldItReset= true
})



