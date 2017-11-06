var chai = require('chai');
var expect = chai.expect;

function foo(x) {
  return x * x;
}

describe('Foo Tests', function () {
  it('should return be a number', function () {
    // Arrange
    const x = 2;

    // Act
    const actualResult = foo(x);

    // Assert
    expect(actualResult).to.be.a('number');
  });

  it('should return 4', function () {
    // Arrange
    const x = 2;

    // Act
    const actualResult = foo(x);

    // Assert
    expect(actualResult).to.equal(4);
  });
});
