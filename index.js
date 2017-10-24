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

  // Subtraction
  case '-':
    result = operand1 - operand2;
    break;

  // Divison
  case '/':
    result = operand1 / operand2;
    break;

  // Min function
    case 'min':
      result = Math.min(operand2, operand1);
      break;

  default:
    console.error('Not implemented:', operator);
}

console.log(result);
