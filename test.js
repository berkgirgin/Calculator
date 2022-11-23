const displayField = document.querySelector(".display");
const displayFieldUpper = document.querySelector(".display .display_upper");
const displayFieldLower = document.querySelector(".display .display_lower");

var storedNumber = "";  
var storedData = []; //this array will be used to calculate later(x and / having higher prio then + and -)
var listOfOperators = ["+", "-", "x", "/"];


const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", function() {clearButtonFunc()});

const numberButton_1 = document.querySelector(".number.one");
numberButton_1.addEventListener("click", function() {storeNumber(1)} );
const numberButton_2 = document.querySelector(".number.two");
numberButton_2.addEventListener("click", function() {storeNumber(2)} );
const numberButton_3 = document.querySelector(".number.three");
numberButton_3.addEventListener("click", function() {storeNumber(3)} );
const numberButton_4 = document.querySelector(".number.four");
numberButton_4.addEventListener("click", function() {storeNumber(4)} );
const numberButton_5 = document.querySelector(".number.five");
numberButton_5.addEventListener("click", function() {storeNumber(5)} );
const numberButton_6 = document.querySelector(".number.six");
numberButton_6.addEventListener("click", function() {storeNumber(6)} );
const numberButton_7 = document.querySelector(".number.seven");
numberButton_7.addEventListener("click", function() {storeNumber(7)} );
const numberButton_8 = document.querySelector(".number.eight");
numberButton_8.addEventListener("click", function() {storeNumber(8)} );
const numberButton_9 = document.querySelector(".number.nine");
numberButton_9.addEventListener("click", function() {storeNumber(9)} );
const numberButton_0 = document.querySelector(".number.zero");
numberButton_0.addEventListener("click", function() {storeNumber(0)} );

const addButton = document.querySelector(".add");
addButton.addEventListener("click", function() {storeOperator("+")});
const subtractButton = document.querySelector(".subtract");
subtractButton.addEventListener("click", function() {storeOperator("-")});
const multiplyButton = document.querySelector(".multiply");
multiplyButton.addEventListener("click", function() {storeOperator("x")});
const divideButton = document.querySelector(".divide");
divideButton.addEventListener("click", function() {storeOperator("/")});

const equalsButton = document.querySelector(".equals");
equalsButton.addEventListener("click", function() {equalsOperator()});
const decimalButton = document.querySelector(".decimal");
decimalButton.addEventListener("click", function() {
    if (storedNumber.includes(".")) {return;};
    storeNumber(".");
});



function add(a, b) {
    let x = Number(a);
    let y = Number(b);
    let z = x + y;
    return z;
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

function operatorFunc(number_1, number_2, selected_operator ) {
    // don't forget to give selected_operator as string
    let result;
    switch (selected_operator) {
        case "+":
            result = add(number_1, number_2 );
            break;
        case "-":
            result = subtract(number_1, number_2);
            break;
        case "x":
            result = multiply(number_1, number_2);
            break;
        case "/":
            result = divide(number_1, number_2);
            break;       
    }
    return result;
}

function storeNumber(num) {
    // to be used on number button event listeners
    let numToString = num.toString();
    storedNumber += numToString;
    displayFieldLower.innerHTML = storedNumber;
    console.log(storedNumber);
}

function storeOperator(operator) {
    // to be used on operator event listeners
    if (storedNumber === "") {return;};
    storedData.push(storedNumber);
    storedData.push(operator);
    storedNumber = "";
    displayFieldLower.innerHTML = "";
    console.log(storedData);
    displayFieldUpper.innerHTML = storedData.join(" ");
}

function equalsOperator() {

    if (storedNumber === "") {return;};
    storedData.push(storedNumber);
    let storedDataCopy = [...storedData];
    let result = calculateStoredInput(storedData);
    let resultToString = result.toString();

    storedDataCopy.push("=");
    storedDataCopy.push(resultToString);

    displayFieldUpper.innerHTML = storedDataCopy.join(" ");
    storedNumber = "";
    storedData = [];
    storedDataCopy = [];
    // storedData.push(resultToString);
    displayFieldLower.innerHTML = "";
}

function clearButtonFunc() {
    storedNumber = "";
    storedData = [];
    displayFieldLower.innerHTML = "";
    displayFieldUpper.innerHTML = "";
}


function calculateStoredInput(arr) {
    //takes the array, which stored numbers and operators
    //calculates the result and returns it

    // first multiply and divide
    let arrayStored = arr;
    let result;

    for (let i=0; i<arrayStored.length; i++) {
        if (arrayStored[i] === "x" || arrayStored[i] === "/") {
            let a = arrayStored[i-1];
            let b = arrayStored[i+1];
            let operator = arrayStored[i];

            result = operatorFunc(a, b, operator);
            // console.log(result);
            let resultToString = result.toString();
            arrayStored.splice(`${(i-1)}`, 3, `${resultToString}`);
            // console.log(arrayStored);

            i=0;
        }    
    }

    // after multiply and divide, now we do add and subtract
    for (let i=0; i<arrayStored.length; i++) {
        if (arrayStored[i] === "+" || arrayStored[i] === "-") {
            let a = arrayStored[i-1];
            let b = arrayStored[i+1];
            let operator = arrayStored[i];

            result = operatorFunc(a, b, operator);
            // console.log(result);
            let resultToString = result.toString();
            arrayStored.splice(`${(i-1)}`, 3, `${resultToString}`);
            // console.log(arrayStored);
            
            i=0;
        }   
    }
    let x = Number(arrayStored);
    let n = parseFloat(x.toFixed(2));
    return n;
}


// testOperatorHistory = ['2', 'x', '50', '/', '4', "-", "10"];
// x = calculateStoredInput(testOperatorHistory)
// console.log(x);

// x = operator(2,5,"x");
// console.log(x, typeof x);
// testArr = [];
// testArr.push(x);
// testArr.push("10");
// console.log(testArr);
