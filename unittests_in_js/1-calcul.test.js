const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('adds two rounded integers', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });

    it('rounds before adding', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('rounds both values up', () => {
      assert.strictEqual(calculateNumber('SUM', 1.5, 4.5), 7);
    });

    it('handles negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -1.4, -2.6), -4);
    });

    it('handles zero', () => {
      assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    });
  });

  describe('SUBTRACT', () => {
    it('subtracts two rounded integers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5, 2), 3);
    });

    it('rounds before subtracting', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('returns zero for equal rounded values', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.2, 3.4), 0);
    });

    it('handles negative results', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 5), -4);
    });
  });

  describe('DIVIDE', () => {
    it('divides two rounded integers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('returns a whole number when evenly divisible', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6, 2), 3);
    });

    it('returns Error when rounded b is 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('returns Error when b rounds down to 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.2), 'Error');
    });

    it('handles negative division', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -6, 2), -3);
    });
  });
});