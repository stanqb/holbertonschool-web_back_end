# Unit Tests in JS

Unit and integration testing in Node.js using **Mocha**, the **Node `assert`** library, **Chai**, and **Sinon**, plus integration tests against a small **Express** server.

## Learning Objectives

- Use Mocha to write a test suite
- Use different assertion libraries (Node `assert` or Chai `expect`)
- Present and organize long test suites with `describe` / `it`
- Use spies and know when they are appropriate
- Use stubs and know when they are appropriate
- Use hooks (`beforeEach`, `afterEach`) and know when to use them
- Write unit tests for async functions (Promises, `done` callback)
- Write integration tests with a small Node server

## Requirements

- Code runs on Ubuntu 20.04 with Node 20.x.x
- All files end with a new line
- All source files use the `.js` extension
- Running `npm run test *.test.js` passes with no warnings or errors

## Running Tests

    npm test ./0-calcul.test.js
    npm test ./1-calcul.test.js
    npm test ./2-calcul_chai.test.js
    npm test ./3-payment.test.js
    npm test ./4-payment.test.js
    npm test ./5-payment.test.js
    npm test ./6-payment_token.test.js
    npm test ./7-skip.test.js

For the API folders, start the server then run the tests:

    cd 8-api && node api.js
    cd 8-api && npm test ./api.test.js
