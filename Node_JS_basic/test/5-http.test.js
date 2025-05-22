const app = require('../5-http');
const assert = require('assert');

describe('5-http', () => {
  it('should export an http server', () => {
    assert.ok(app);
  });
});
