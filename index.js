1
function getMessage (text) {
    return 'Вы ввели ' + text;
}
console.log(getMessage('qwerty'));
2
function calcSum (num) {
    if (isNaN(num)) {
        return false;
    }
    return num + 5;
}
console.log (calcSum (Number(5)));
3/**/
function getConcatenation (str1, str2) {
    return str1 + str2;
}
console.log (getConcatenation('Conca', 'tenation'));
4
function calcMult (num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return false;
    }
    return num1 * num2;
}
console.log (calcMult(3, 3));
5
function calcRemainder (num1, num2){
    if (num1 % num2 === 0) {
    return true;
    }
    else {
        return false
    }
}

console.log (calcRemainder(3, 4));
6
function calcPow (num1, num2) {
    return Math.pow (num1, num2)
}
console.log (calcPow(2, 3));
7
