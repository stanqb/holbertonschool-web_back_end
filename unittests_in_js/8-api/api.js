const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
  const url = 'http://localhost:7865/';

  it('returns status code 200', (done) => {
    request.get(url, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('returns the correct message in the body', (done) => {
    request.get(url, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('returns a Content-Type of text/html', (done) => {
    request.get(url, (error, response) => {
      expect(response.headers['content-type']).to.contain('text/html');
      done();
    });
  });
});