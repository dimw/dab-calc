
const chai = require('chai');
const expect = chai.expect;

const plus = require('../src/operators/plus');

describe('Plus', () => {
  it('should add two numbers', () => {
    // Given
    const a = 2;
    const b = 3;

    // When
    const actualResult = plus(a, b);

    // Then
    expect(actualResult).to.equal(5);
  });
});
