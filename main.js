function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a - b;
}

function operate(a, b, operator) {
    switch (operator) {
        case "+":
            add(a,b);
            break;
        case "-":
            subtract(a,b);
            break;
        case "*":
            multiply(a,b);
            break;
        case "/":
            divide(a,b);
            break;
        default:
            break;
    }
}

function numPressed(num) {
    console.log(num);
}

function operationPressed(operation) {
    console.log(operation);
}

function allClearPressed() {
    console.log("AC");
}

function clearEntryPressed() {
    console.log("CE");
}

function signPressed() {
    console.log("+/-");
}

function decimalPressed() {
    console.log(".");
}

function equalPressed(num) {
    console.log("=");
}

function updateNumberDisplay(num) {
    const numberDisplay = document.querySelector("#inputValue");
    numberDisplay.textContent = num;
}

function updateOperatorDisplay(operation) {
    const operatorDisplay = document.querySelector("#operatorValue")
    operatorDisplay.textContent += operation;
}

const buttons = document.querySelector("#buttons");
buttons.addEventListener("click", (event) => {
    const target = event.target;
    switch(target.className) {
        case "num":
            numPressed(target.id);
            break;
        case "operation":
            operationPressed(target.id);
            break;
        case "allClear":
            allClearPressed(target.id);
            break;
        case "clearEntry":
            clearEntryPressed(target.id);
            break;
        case "sign":
            signPressed(target.id);
            break;
        case "decimal":
            decimalPressed(target.id);
            break;
        case "equal":
            equalPressed(target.id);
            break;
    }
});

let num1 = 0;
let num2 = 0;
let operator = "";
let displayValue = "";

