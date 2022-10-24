let aInput = document.querySelector('#a');
let bInput = document.querySelector('#b');
let sumBtn = document.querySelector('#btn-sum');
let subtractBtn = document.querySelector('#btn-sub');
let multiplyBtn = document.querySelector('#btn-mtpl');
let divideBtn = document.querySelector('#btn-dvd');
let result = document.querySelector('#result');

const sum = () => {
    let a = Number(aInput.value);
    let b = Number(bInput.value);

    result.textContent = a + b;
}

const subtract = () => {
    let a = aInput.value;
    let b = bInput.value;

    result.textContent = a - b;
}

const multiply = () => {
    let a = aInput.value;
    let b = bInput.value;

    result.textContent = a * b;
}

const divide = () => {
    let a = aInput.value;
    let b = bInput.value;

    result.textContent = a / b;
}

sumBtn.onclick = sum;
subtractBtn.onclick = subtract;
multiplyBtn.onclick = multiply;
divideBtn.onclick = divide;