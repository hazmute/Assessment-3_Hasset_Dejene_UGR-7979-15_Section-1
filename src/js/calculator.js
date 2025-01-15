const display = document.getElementById('display');
let currentInput = '';
let operator = null;
let previousInput = '';

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        if (!isNaN(value) || value === '.') {
            currentInput += value;
            display.value = currentInput;
        } else if (['+', '-', '*', '/'].includes(value)) {
            operator = value;
            previousInput = currentInput;
            currentInput = '';
            display.value = previousInput + ' ' + operator;
        } else if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = null;
            display.value = '';
        } else if (value === '=') {
            let result;
            const prev = parseFloat(previousInput);
            const current = parseFloat(currentInput);
            if (operator === '+') {
                result = prev + current;
            } else if (operator === '-') {
                result = prev - current;
            } else if (operator === '*') {
                result = prev * current;
            } else if (operator === '/') {
                result = prev / current;
            }
            display.value = result;
            currentInput = result.toString();
            operator = null;
            previousInput = '';
        }
    });
});

document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (!isNaN(key) || key === '.') {
        currentInput += key;
        display.value = currentInput;
    } else if (['+', '-', '*', '/'].includes(key)) {
        operator = key;
        previousInput = currentInput;
        currentInput = '';
        display.value = previousInput + ' ' + operator;
    } else if (key === 'Escape') {
        currentInput = '';
        previousInput = '';
        operator = null;
        display.value = '';
    } else if (key === 'Enter') {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);
        if (operator === '+') {
            result = prev + current;
        } else if (operator === '-') {
            result = prev - current;
        } else if (operator === '*') {
            result = prev * current;
        } else if (operator === '/') {
            result = prev / current;
        }
        display.value = result;
        currentInput = result.toString();
        operator = null;
        previousInput = '';
    }
});