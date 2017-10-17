/**
 * Reverse Polish Notation Calculator
 */

var myArgs = process.argv.slice(2);

var operand1 = myArgs[0];
var operand2 = myArgs[1];
var operator = myArgs[2];

console.log('Calculating:', operand1, operand2, operator);

var result;

switch (operator) {
  case '+':
    result = operand1 + operand2;
  default:
    console.error('Not implemented:', operator);
}

console.log(result);
