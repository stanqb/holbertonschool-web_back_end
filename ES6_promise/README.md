# ES6 Promises

This project focuses on understanding and implementing JavaScript Promises in ES6. It covers fundamental concepts and practical applications of asynchronous JavaScript.

## Learning Objectives

By the end of this project, you should be able to explain:

- What Promises are and why they're useful
- How to use the `then`, `resolve`, and `catch` methods
- How to use every method of the Promise object
- How to handle exceptions with `throw` and `try/catch`
- How to use the `await` operator
- How to create and use `async` functions

## Requirements

- All files will be interpreted/compiled on Ubuntu 20.04 LTS using Node 20.x and npm 9.x
- Code should use the `.js` extension
- Code will be tested using Jest and verified against ESLint
- All functions must be exported

## Setup

1. Install NodeJS 20.x:
```
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

2. Install project dependencies:
```
npm install --save-dev jest babel-jest @babel/core @babel/preset-env @babel/cli eslint
```

## Tasks

The project consists of 10 tasks that gradually build understanding of Promises:

0. Creating a basic Promise
1. Working with Promise resolution and rejection
2. Handling Promise responses
3. Managing multiple Promises
4. Creating resolved Promises with data
5. Creating rejected Promises
6. Handling multiple Promises and their states
7. Working with Promise race conditions
8. Throwing errors in functions
9. Using try/catch with error handling

Each task has specific requirements and test cases to validate the implementation.

## Files

The project uses several configuration files:
- `package.json`: Project dependencies and scripts
- `babel.config.js`: Babel configuration
- `.eslintrc.js`: ESLint rules
- `utils.js`: Utility functions for the tasks

## Author

- Stan QUEUNIEZ