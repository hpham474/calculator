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
        /*
        operatorValue = operation;
        formulaValue = `${num1} ${operatorValue} ${num2} =`;
        const result = parseFormula(formulaValue);
        formulaValue = `${num1} ${operatorValue}`;
        updateFormulaDisplay(formulaValue);
        */
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
    console.log("CE");
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
    let result = 0; 
    const formulaArr = formula.split(" ");
    switch (formulaArr[1]) {
        case "+":
            return add(Number(formulaArr[0]), Number(formulaArr[2]));
            break;
        case "-":
            return subtract(Number(formulaArr[0]), Number(formulaArr[2]));
            break;
        case "*":
            return multiply(Number(formulaArr[0]), Number(formulaArr[2]));
            break;
        case "/":
            return divide(Number(formulaArr[0]), Number(formulaArr[2]));
            break;
        case "%":
            break;
    }
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

