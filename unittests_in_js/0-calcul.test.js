const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('returns the sum of two integers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('returns the sum when both arguments are equal', () => {
    assert.strictEqual(calculateNumber(2, 2), 4);
  });

  it('rounds b down when its decimal part is below .5', () => {
    assert.strictEqual(calculateNumber(1, 3.2), 4);
  });

  it('rounds b up when its decimal part is above .5', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('rounds a down when its decimal part is below .5', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('rounds a up when its decimal part is .5', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('rounds both arguments up when both are .5', () => {
    assert.strictEqual(calculateNumber(1.5, 3.5), 6);
  });

  it('rounds .5 upwards (banker rounding is NOT used)', () => {
    assert.strictEqual(calculateNumber(2.5, 2.5), 6);
  });

  it('handles zero values', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('handles a single decimal argument', () => {
    assert.strictEqual(calculateNumber(0.1, 0.3), 0);
  });

  it('rounds negative numbers correctly', () => {
    assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
  });

  it('rounds -.5 towards zero (JS behaviour)', () => {
    assert.strictEqual(calculateNumber(-1.5, 0), -1);
  });

  it('works with large numbers', () => {
    assert.strictEqual(calculateNumber(1000.4, 2000.6), 3001);
  });

  it('returns a number type', () => {
    assert.strictEqual(typeof calculateNumber(1.1, 2.2), 'number');
  });
});