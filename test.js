const displayField = document.querySelector(".display");
const displayFieldUpper = document.querySelector(".display .display_upper");
const displayFieldLower = document.querySelector(".display .display_lower");

var storedNumber = "";  
var storedData = []; //this array will be used to calculate later(x and / having higher prio then + and -)

const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");

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

function operator(number_1, number_2, selected_operator ) {
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
    storedData.push(operator); // adds it as a function, not a string
    storedNumber = "";
    displayFieldLower.innerHTML = "";
    console.log(storedData);
    displayFieldUpper.innerHTML = storedData.join(" ");
}

function equalsOperator() {
    let result = calculateStoredInput(storedData);
    storedNumber = "";
    storedData = [];
    storedData.push(result);
    displayFieldLower.innerHTML = "";
    let resultToString = result.toString();
    displayFieldUpper.innerHTML = resultToString;
}


function calculateStoredInput(arrayStored) {
    //takes the array, which stored numbers and operators
    //calculates the result and returns it

    // first multiply and divide

    //!!! check reduce(), bcs i would need to iterate the array again after editing it??
    for (i=0; i<arrayStored.length; i++) {
        if (arrayStored[i] === "x" || arrayStored[i] === "/") {
            let a = arrayStored[i-1];
            let b = arrayStored[i+1];


        }    

    }
}


testOperatorHistory = ['2', '+', '5', 'x', '3'];