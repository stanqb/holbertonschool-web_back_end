# ES6 Basics

This project explores fundamental concepts and features introduced in ECMAScript 2015 (ES6), focusing on practical implementation through a series of JavaScript programming tasks.

## Overview

ES6 brought significant improvements to JavaScript, making the language more powerful and expressive. This project covers:

- Constants vs variables (`const` and `let`)
- Block-scoped variables
- Arrow functions and default parameters
- Rest and spread syntax
- Template literals
- Object property shorthand and computed properties
- Method properties
- Iterators and for-of loops

## Requirements

- Ubuntu 20.04 LTS
- Node.js 20.x
- npm 9.x+
- Code must use ES6 features
- All functions must be exported

## Setup

1. Install Node.js 20.x:
```bash
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

2. Install project dependencies:
```bash
npm install --save-dev jest babel-jest @babel/core @babel/preset-env eslint
```

3. Run your tests with:
```bash
npm run dev your-file.js
```

## Project Tasks

The project consists of 12 progressive tasks:

0. Converting `var` to `const` and `let`
1. Implementing block scoping
2. Converting functions to arrow syntax
3. Setting default parameter values
4. Using rest parameters
5. Implementing spread syntax
6. Creating template literals
7. Using object property shorthand
8. Working with computed property names
9. Implementing ES6 method properties
10. Converting loops to for...of syntax
11. Creating objects with dynamic properties
12. Building a report object with methods

Each task builds on ES6 concepts and requires modifying existing code to leverage modern JavaScript features.

## Author

- Stan QUEUNIEZ