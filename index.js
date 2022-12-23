class Calculator {
    static sum(a, b) {
        return a + b;
    }
    static substract(a, b) {
        return a - b;
    }
    static multiply(a, b) {
        return a * b;
    }
    static divide(a, b) {
        if (b == 0) {
            alert("На ноль делить нельзя!");
        } else
            return a / b;
    }
}


function Sum() {
    const a = Number(document.querySelector('#a').value);
    const b = Number(document.querySelector('#b').value);
    const result = document.querySelector('#result');

    result.textContent = Calculator.sum(a, b);
}

function Substract() {
    const a = Number(document.querySelector('#a').value);
    const b = Number(document.querySelector('#b').value);
    const result = document.querySelector('#result');

    result.textContent = Calculator.substract(a, b);
}

function Multiply() {
    const a = Number(document.querySelector('#a').value);
    const b = Number(document.querySelector('#b').value);
    const result = document.querySelector('#result');

    result.textContent = Calculator.multiply(a, b);
}

function Divide() {
    const a = Number(document.querySelector('#a').value);
    const b = Number(document.querySelector('#b').value);
    const result = document.querySelector('#result');

    result.textContent = Calculator.divide(a, b);
}

// старое решение с использованием стрелочных функций:
//
// const sum = () => {
//     let a = Number(aInput.value);
//     let b = Number(bInput.value);

//     result.textContent = a + b;
// }

// const subtract = () => {
//     let a = aInput.value;
//     let b = bInput.value;

//     result.textContent = a - b;
// }

// const multiply = () => {
//     let a = aInput.value;
//     let b = bInput.value;

//     result.textContent = a * b;
// }

// const divide = () => {
//     let a = aInput.value;
//     let b = bInput.value;

//     if (b == 0) {
//         alert("На ноль делить нельзя!");
//     } else
//         result.textContent = a / b;
// }

// sumBtn.onclick = sum;
// subtractBtn.onclick = subtract;
// multiplyBtn.onclick = multiply;
// divideBtn.onclick = divide;