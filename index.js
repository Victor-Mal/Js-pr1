
//1.принимает text (любой тип) и вернет строку "Вы ввели " + text.

function getText (text) {
    return 'Вы ввели ' + text;
}
console.log(getText('qwerty'));

//2.принимает любое число num (тип число) и возвращает сумму num с 5.

function calcSum (num) {

    if (isNaN(num)) {
        return false;
    }
    return num + 5;
}
console.log (calcSum (5));

//3.принимает две строки (тип строки)  и возвращает их обьединение.

function getConcatenation (str1, str2) {

    if ((typeof(str1) !== "string") || typeof(str2) !== "string") {
        return false;
    }
    return str1 + str2;
}
console.log (getConcatenation('Conca', 'tenation'));

//4.принимает два числа (тип число)  и возвращает их произведение (*).

function calcMult (num1, num2) {
    
    if (isNaN(num1) || isNaN(num2)) {
        return false;
    }
    return num1 * num2;
}

console.log (calcMult(3, 3));

//5.принимает два числа (тип число или строка), проверяет делится ли num1 на num2 без остатка, возвращает правду или ложь.

function calcRemainder (num1, num2){

    if (num1 % num2 === 0) {
    return true;
    }
    else {
        return false
    }
}

console.log (calcRemainder(3, 4));

//6.принимает два числа (тип число или строка)  и возвращает число в степени.

function calcPow (num1, num2) {

    return Math.pow (num1, num2)
}
console.log (calcPow(2, 3));

//7.принимает числа, количество параметров (зависит от выбранной фигуры), возвращает площадь выбранной вами фигуры (на выбор: треуг, конус, трапеция, паралелепипед, круг, шар, цилиндр).

function calcSphereArea (num) {
    
    if (isNaN(num)) {
        return false;
    }

    return 4 * Math.PI * Math.pow(num, 2);
}
console.log (calcSphereArea (3));

//8.*принимает два числа, и оператор строкой (+, -, *, /). Считает нужную операцию (switch) и возвращает результат.

function calcNumber (num1, symbol, num2) {

    if (isNaN(num1) || isNaN(num2)) {
        return false;
    }
    switch (symbol) {
        case '+': {
            return num1 + num2
            break;
        }    
        case '-': {
            return num1 - num2
            break;
        }
        case '*': {
            return num1 * num2
            break;
        }    
        case '/': {
            return num1 / num2
            break;
        }
    }        
}
console.log (calcNumber("4", '*', 2))

//Loops

//1.функция выводит в консоль строку "Hello loop", 5 раз.

function showHelloLoop() { 
    for (let i = 0; i < 5; i++) {  
        console.log('Hello loop');
    }    
}
showHelloLoop();

//2.функция выводит в консоль строку "Loop " + i, 5 раз.

function showPlusLoop() { 

    for (let i = 0; i < 5; i++) {  
    res = 'Loop' + i;
    }

    return res;
}
console.log (showPlusLoop());

//3.функция принимает число num, выводит его в консоль 5 раз, и возвращает число num.

function getNum (num) {

    if (isNaN(num)) {
        return false;
    }
    for (let i = 0; i < 5; i++) {  
        console.log (num);
    }
    return num;    
}
getNum(5);

//4.функция принимает два числа, и 5 раз умножает num1 на num2

function calcMultLoop (num1, num2) {

    if (isNaN(num1) || isNaN(num2)) {
        return false;
    }
    let result = 0;

    for (let i = 0; i < 5; i++) {
        result += num1 * num2;   
    }

    return result;
}
console.log (calcMultLoop(3, 6));

//5.функция принимает число num, и умножает (*=) buffer на переменную i, num раз (нужна доп переменная buffer - буфер умножения), возвращает buffer (результат умножения)
//5*.считает факториал числа num (циклом)

function calcFactorial (num) {
    let buffer = 1;

    for (let i = 1; i <= num; i++) {
        buffer *= i;   
    }

    return buffer;
}
console.log(calcFactorial(5)); 

//6.функция принимает число val и число power, возводит val в степень power, через цикл (нужна доп переменная - буфер умножения), возвращает результат умножения (значение буферной переменной)


function calcPowLoop (val, power) {
    
    let buffer = 1;

    for (let i = 0; i < power; i++) {
        buffer *= val;   
    }

    return buffer;
}
console.log(calcPowLoop(4, 2)); 