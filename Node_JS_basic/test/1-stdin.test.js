const assert = require('assert');
const fs = require('fs');

describe('1-stdin.js', () => {
  it('should exist', () => {
    assert.ok(fs.existsSync('./1-stdin.js'));
  });
});
