alert ("Hello! in this page you can sum and divide two numbers.")
let number1 = parseFloat(prompt ("Please, type the first number"));
let number2 = parseFloat(prompt ("Please, type the second number"));
let sum = parseFloat(number1) + parseFloat(number2);
alert ("It's sum of two numbers which you typed" + " " + sum);
let divide =  Math.round(parseFloat(number1) /  parseFloat(number2));
if (number2 == 0) {
    alert ("sorry, you cant divide on 0")
}
else {
alert ("It's divide of two numbers which you typed" + " " + divide)}