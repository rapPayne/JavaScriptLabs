import { convert } from '../romanNumeralConverter';
import { showHoisting } from '../romanNumeralConverter';
// Arrange
// Act
// Assert

describe('Show hoisting ', () => {
  test('returns undefined', () => {
    const retVal = showHoisting();
    expect(retVal).toBeUndefined();
  })
})

describe('Roman numeral converter', () => {
  it('will return 1 given i', () => {
    // Arrange
    // Act
    const actual = convert('i');
    // Assert
    expect(actual).toEqual(1);
  });

  it('will return 2 given ii', () => {
    // Arrange
    // Act
    const actual = convert('ii');
    // Assert
    expect(actual).toEqual(2);
  });

  it('will return 3 given iii', () => {
    // Arrange
    // Act
    const actual = convert('iii');
    // Assert
    expect(actual).toEqual(3);
  });
  it('will return 10 given x', () => {
    // Arrange
    // Act
    const actual = convert('x');
    // Assert
    expect(actual).toEqual(10);
  });
});
