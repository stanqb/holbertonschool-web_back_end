const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('adds two rounded integers', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });

    it('rounds before adding', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('rounds both values up', () => {
      expect(calculateNumber('SUM', 1.5, 4.5)).to.equal(7);
    });

    it('handles negative numbers', () => {
      expect(calculateNumber('SUM', -1.4, -2.6)).to.equal(-4);
    });

    it('handles zero', () => {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });
  });

  describe('SUBTRACT', () => {
    it('subtracts two rounded integers', () => {
      expect(calculateNumber('SUBTRACT', 5, 2)).to.equal(3);
    });

    it('rounds before subtracting', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('returns zero for equal rounded values', () => {
      expect(calculateNumber('SUBTRACT', 3.2, 3.4)).to.equal(0);
    });

    it('handles negative results', () => {
      expect(calculateNumber('SUBTRACT', 1, 5)).to.equal(-4);
    });
  });

  describe('DIVIDE', () => {
    it('divides two rounded integers', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('returns a whole number when evenly divisible', () => {
      expect(calculateNumber('DIVIDE', 6, 2)).to.equal(3);
    });

    it('returns Error when rounded b is 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('returns Error when b rounds down to 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0.2)).to.equal('Error');
    });

    it('handles negative division', () => {
      expect(calculateNumber('DIVIDE', -6, 2)).to.equal(-3);
    });
  });
});