const countStudents = require('../3-read_file_async');
const assert = require('assert');

describe('countStudents async', () => {
  it('should export a function', () => {
    assert.strictEqual(typeof countStudents, 'function');
  });
});
