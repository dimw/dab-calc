var chai = require('chai');
var expect = chai.expect;

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
});
