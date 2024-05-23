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
    return a / b;
}

function operate(a, b, operator) {
    switch (operator) {
        case "+":
            return add(a,b);
            break;
        case "-":
            return subtract(a,b);
            break;
        case "*":
            return multiply(a,b);
            break;
        case "/":
            return divide(a,b);
            break;
        default:
            break;
    }
}

function numPressed(num) {
    if (editNum1) {
        if (num1 === "0") {
            num1 = "";
        }
        num1 += num;
        updateNumberDisplay(num1);
    } else {
        if (num2 === " 0") {
            num2 = "";
        }
        num2 += num;
        updateNumberDisplay(num2);
    }
}

function operationPressed(operation) {
    if (editNum1) {
        operatorValue = operation;
        if(formulaValue != "") {
            formulaValue = "";
        }
        formulaValue += `${num1} ${operatorValue}`;
        updateFormulaDisplay(formulaValue);
        updateNumberDisplay("0");
        editNum1 = !editNum1;
    } else {
        formulaValue = `${num1} ${operatorValue} ${num2} =`;
        const result = parseFormula(formulaValue);

        num2 = " 0";
        num1 = result;
        editNum1 = true;
        updateNumberDisplay(num1);

        operatorValue = operation;
        formulaValue = `${num1} ${operatorValue}`;
        updateFormulaDisplay(formulaValue);
        editNum1 = !editNum1;
    }
}

function allClearPressed() {
    num1 = "0";
    num2 = " 0";
    operatorValue = "";
    formulaValue = "";
    editNum1 = true;
    updateFormulaDisplay(formulaValue);
    updateNumberDisplay(num1);
}

function clearEntryPressed() {
    if (editNum1) {
        num1 = "0";
        updateNumberDisplay(num1);
    }
    else if (!editNum1) {
        num2 = " 0";
        updateNumberDisplay(num2);
    }
}

function signPressed() {
    console.log("+/-");
}

function decimalPressed() {
    console.log(".");
}

function equalPressed(num) {
    if (editNum1) {
        return;
    }
    formulaValue += ` ${num2} =`;
    updateFormulaDisplay(formulaValue);
    const result = parseFormula(formulaValue);

    num2 = " 0";
    num1 = result;
    editNum1 = true;
    updateNumberDisplay(num1);
}

function updateNumberDisplay(num) {
    const numberDisplay = document.querySelector("#displayValue");
    numberDisplay.textContent = num;
}

function updateFormulaDisplay(formula) {
    const formulaDisplay = document.querySelector("#formulaValue")
    formulaDisplay.textContent = formula;
}

function parseFormula(formula) {
    const formulaArr = formula.split(" ");
    return operate(Number(formulaArr[0]), Number(formulaArr[2]), formulaArr[1]);
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
let num2 = " 0";
let operatorValue = "";
let formulaValue = "";
let displayValue = "";
let editNum1 = true;    //true = num1 is being edited
                        //false = num2 is being edited

