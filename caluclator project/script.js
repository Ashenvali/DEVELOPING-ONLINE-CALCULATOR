// Get display element
const display = document.getElementById("display");

// Get all buttons
const buttons = document.querySelectorAll("button");

// Store current input
let currentInput = "";

// Loop through all buttons
buttons.forEach(function(button) {

    // Add event listener
    button.addEventListener("click", function() {

        let value = button.getAttribute("data-value");

        // If AC is pressed
        if (value === "AC") {
            currentInput = "";
            display.innerText = "0";
        }

        // If Equal is pressed
        else if (value === "=") {
            calculateResult();
        }

        // If Square button is pressed
        else if (value === "square") {
            squareNumber();
        }

        // Otherwise add value to input
        else {
            currentInput += value;
            display.innerText = currentInput;
        }

    });
});

// Function to calculate result
function calculateResult() {

    try {
        // Using eval to calculate expression
        let result = eval(currentInput);

        display.innerText = result;
        currentInput = result.toString();
    }
    catch (error) {
        display.innerText = "Error";
        currentInput = "";
    }
}

// Function to square a number
function squareNumber() {

    if (currentInput !== "") {
        let number = parseFloat(currentInput);
        let result = number * number;

        display.innerText = result;
        currentInput = result.toString();
    }
}
