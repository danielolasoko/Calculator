// Function to add a number or operator to the display
function addToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to evaluate the expression and display the result
function calculate() {
    try {
        const expression = document.getElementById('display').value;
        const result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        // Handle errors such as division by zero
        document.getElementById('display').value = 'Error';
    }
}

// Function to handle keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (/\d/.test(key) || ['+', '-', '*', '/', '.', 'Enter'].includes(key)) {
        if (key === 'Enter') {
            calculate();
        } else {
            addToDisplay(key);
        }
    } else if (key === 'Backspace') {
        const currentValue = document.getElementById('display').value;
        document.getElementById('display').value = currentValue.slice(0, -1);
    }
});
