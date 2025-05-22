const countStudents = require('../2-read_file');
const assert = require('assert');

describe('countStudents', () => {
  it('should export a function', () => {
    assert.strictEqual(typeof countStudents, 'function');
  });
});
