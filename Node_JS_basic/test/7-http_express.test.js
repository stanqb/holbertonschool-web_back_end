const app = require('../7-http_express');
const assert = require('assert');

describe('7-http_express', () => {
  it('should export an express app', () => {
    assert.ok(app);
  });
});
