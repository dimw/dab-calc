/**
 * Reverse Polish Notation Calculator
 */

var myArgs = process.argv.slice(2);

var operand1 = parseInt(myArgs[0]);
var operand2 = parseInt(myArgs[1]);
var operator = myArgs[2];

console.log('Calculating:', operand1, operand2, operator);

var result;

switch (operator) {
  case '+':
    result = operand1 + operand2;
    break;
  case '^':
    result = Math.pow(operand1, operand2);
    break;
  default:
    console.error('Not implemented:', operator);
}

console.log(result);
