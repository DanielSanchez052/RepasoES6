// Repaso ES6
//'use strict'
// const numero1 = 1;
// let suma = 5;

// if (numero1 >= 1) {
//     suma = 5;
// }


// console.log(suma);

let number1 = prompt("Ingresa un numero -");
let number2 = prompt("Ingresa un numero |");
let number3 = prompt("Ingresa un numero _");

const bigNumber = (num1, num2, num3) => {
    let big = 0;
    if (num1 > num2 && num1 > num3) {
        big = num1
    } else
    if (num2 > num1 && num2 > num3) {
        big = num2
    } else {
        big = num3
    }
    return big;
}

console.log(`El  ${bigNumber(number1, number2, number3)} es mayor`);