var chai = require('chai');
var expect = chai.expect;

const minus = require('../src/operators/minus');



function foo(x) {
  return x * x;
}

describe('Foo Tests', () => {
  it('should return be a number', () => {
    // Arrange
    const x = 2;

    // Act
    const actualResult = foo(x);

    // Assert
    expect(actualResult).to.be.a('number');
  });

  it('should return 4', () => {
    // Arrange
    const x = 2;

    // Act
    const actualResult = foo(x);

    // Assert
    expect(actualResult).to.equal(4);
  });

  it('parseInt radix test', () => {
    // Given
    const s = '9';
    const radix = 10;
    // When
    const actualResult = parseInt(s, radix);
    // Then
    console.log(`actualResult = ${actualResult}`);
    expect(actualResult).to.equal(9);
  });
  it('5 minus 5 should return 0', () => {
    // Arrange
    const m = 5;
    // Act
    const actualResult = minus(m, m);
    // Assert
    expect(actualResult).to.equal(0);
    describe('Negative substraction', () => {
      it('5 minus 10 should return -5', () => {
        // Arrange
        const m = 5;
        const m2 = 10;
        // Act
        const vrrrr = minus(m, m2);
        // Assert
        expect(vrrrr).to.equal(-5);
      });
    });
  });
});
