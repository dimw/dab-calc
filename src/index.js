/**
 * Reverse Polish Notation Calculator
 */
const plus = require('./operators/plus');

const myArgs = process.argv.slice(2);

const operand1 = parseInt(myArgs[0], 10);
const operand2 = parseInt(myArgs[1], 10);
const operator = myArgs[2];

console.log('Calculating:', operand1, operand2, operator);

let result;

switch (operator) {
  case '+':
    result = plus(operand1, operand2);
    break;

  case '^':
    // Potentiation
    result = operand1 ** operand2;
    break;

  case '-':
    // Subtraction
    result = operand1 - operand2;
    break;

  case '/':
    // Divison
    result = operand1 / operand2;
    break;

  case 'min':
    // Min function
    result = Math.min(operand2, operand1);
    break;

  case 'max':
    // Max-function
    result = Math.max(operand1, operand2);
    break;

  default:
    console.error('Not implemented:', operator);
}

console.log(result);
