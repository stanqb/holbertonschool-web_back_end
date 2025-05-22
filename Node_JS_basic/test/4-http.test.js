const app = require('../4-http');
const assert = require('assert');

describe('4-http', () => {
  it('should export an http server', () => {
    assert.ok(app);
  });
});
