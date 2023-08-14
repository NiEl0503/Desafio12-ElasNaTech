function calculadora(button, display) {
    switch (button.innerHTML) {
        case 'C':
            borrar(display);
            break;
        case '=':
            calcular(display);
            break;
        default:
            actualizar(display, button);
            break;
    }
}

function borrar(display) {
    display.innerHTML = '';
}

function calcular(display) {
    display.innerHTML = eval(display.innerHTML);
}

function actualizar(display, button) {
    if (display.innerHTML === '0') {
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
}

window.addEventListener('load', () => {
    const display = document.querySelector('.calculator-display > div');
    const keypadButtons = document.querySelectorAll('.keypad-button');

    keypadButtons.forEach((button) => {
        button.addEventListener('click', () => {
            calculadora(button, display);
        });
    });
});
