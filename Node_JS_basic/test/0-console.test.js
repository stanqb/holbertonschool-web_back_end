const displayMessage = require('../0-console');
const assert = require('assert');

describe('displayMessage', () => {
  it('should export a function', () => {
    assert.strictEqual(typeof displayMessage, 'function');
  });
});
