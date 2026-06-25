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

describe('Cart page', () => {
  it('returns status code 200 when :id is a number', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('returns the correct message when :id is a number', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('returns status code 404 when :id is NOT a number', (done) => {
    request.get('http://localhost:7865/cart/hello', (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('returns status code 404 when :id is empty', (done) => {
    request.get('http://localhost:7865/cart/', (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
