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

const buttons = document.querySelector("#buttons");
buttons.addEventListener("click", (event) => {
    const target = event.target;
    switch(target.id) {
        case "key1":
            console.log("1");
            break;
        case "key2":
            console.log("2");
            break;
        case "key3":
            console.log("3");
            break;
        case "key4":
            console.log("4");
            break;
        case "key5":
            console.log("5");
            break;
        case "key6":
            console.log("6");
            break;
        case "key7":
            console.log("7");
            break;
        case "key8":
            console.log("8");
            break;
        case "key9":
            console.log("9");
            break;
        case "key0":
            console.log("0");
            break;
        case "key+":
            console.log("+");
            break;
        case "key-":
            console.log("-");
            break;
        case "key*":
            console.log("*");
            break;
        case "key/":
            console.log("/");
            break;
        case "key%":
            console.log("%");
            break;
        case "key=":
            console.log("=");
            break;
        case "key+/-":
            console.log("+/-");
            break;
        case "key.":
            console.log(".");
            break;
        case "keyAC":
            console.log("AC");
            break;
        case "keyCE":
            console.log("CE");
            break;
    }
});

let num1 = 0;
let num2 = 0;
let operator = "";
displayValue = "";

