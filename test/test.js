var chai = require('chai');
var expect = chai.expect;

const divide = require('../src/operators/division');
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
    expect(actualResult).to.equal(9);
  });

  describe('4 divided by 2', () => {
    it('should be 2', () => {
      const result = divide(4, 2);

      expect(result).to.equal(2);
    });
  });
  
  describe('4 divided by -2', () => {
    it('should be -2', () => {
      const result = divide(4, -2);

      expect(result).to.equal(-2);
  it('5 minus 5 should return 0', () => {
    // Arrange
    const m = 5;
    // Act
    const actualResult = minus(m, m);
    // Assert
    expect(actualResult).to.equal(0);
    describe('Negative substraction', () => {
      it('5 minus 10 should return -5', () => {
        const m = 5;
        const m2 = 10;
        const vrrrr = minus(m, m2);
        expect(vrrrr).to.equal(-5);
      });
    });
  });
});
