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

let operator
let firstOperand
let secondOperand

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
    return "Invalid Operator";
}
}