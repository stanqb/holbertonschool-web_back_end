# NodeJS Basics

This project is an introduction to NodeJS, focusing on the basics of server-side JavaScript programming. It covers fundamental concepts like reading files, handling process inputs, and creating HTTP servers with both native Node modules and Express.js framework.

## Learning Objectives

By the end of this project, you should be able to:

- Run JavaScript using NodeJS
- Use NodeJS modules
- Read files using specific Node modules
- Access command line arguments and environment variables via process
- Create basic HTTP servers using Node's HTTP module
- Create HTTP servers using Express.js
- Create advanced routes with Express.js
- Use ES6 with NodeJS via Babel
- Improve development speed with Nodemon

## Requirements

- All code will be executed on Ubuntu 20.04 LTS using Node (version 20.x.x)
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- Code should use the .js extension
- Code will be tested using Jest and verified with ESLint
- All functions/classes must be exported using `module.exports = myFunction`

## Project Structure

The project consists of a series of tasks that build upon each other:

1. **Basic JavaScript Execution**: Creating and exporting a simple function.
2. **Process stdin Handling**: Program that interacts with user input.
3. **File Reading (Synchronous)**: Reading and processing student data from CSV.
4. **File Reading (Asynchronous)**: Same as above but using asynchronous methods.
5. **Basic HTTP Server**: Creating a simple server with Node's HTTP module.
6. **Complex HTTP Server**: Expanding the server to handle different routes.
7. **Express HTTP Server**: Implementing a basic server using Express.js.
8. **Advanced Express Server**: Building a complex server with Express.js.
9. **Full Server Organization**: Structuring a complete server with controllers, routes, and utilities.

## Setup

```bash
# Install dependencies
npm install
```

## Testing

```bash
# Run tests
npm run test

# Run full test suite (tests + linting)
npm run full-test
```

## Development

```bash
# Using nodemon for faster development
npm run dev
```
