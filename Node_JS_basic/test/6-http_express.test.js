const app = require('../6-http_express');
const assert = require('assert');

describe('6-http_express', () => {
  it('should export an express app', () => {
    assert.ok(app);
  });
});
