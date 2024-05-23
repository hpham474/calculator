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
    if (numSelector) {
        if (num1 === "0") {
            num1 = "";
        }
        num1 += num;
        updateNumberDisplay(num1);
    } else {
        if (num2 === "0") {
            num2 = "";
        }
        num2 += num;
        updateNumberDisplay(num2);
    }
}

function operationPressed(operation) {
    if (numSelector) {
        operatorValue = operation;
        formulaValue += `${num1} ${operatorValue}`;
        updateFormulaDisplay(formulaValue);
        updateNumberDisplay("");
    }
    numSelector = !numSelector;
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
    const numberDisplay = document.querySelector("#displayValue");
    numberDisplay.textContent = num;
}

function updateFormulaDisplay(operation) {
    const operatorDisplay = document.querySelector("#formulaValue")
    operatorDisplay.textContent = operation;
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

let num1 = "0";
let num2 = "0";
let operatorValue = "";
let formulaValue = "";
let displayValue = "";
let numSelector = true;     //true = num1 is being edited
                            //false = num2 is being edited

