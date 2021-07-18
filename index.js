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

