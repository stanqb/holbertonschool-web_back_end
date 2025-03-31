# ES6 Data Manipulation

This project focuses on JavaScript ES6 array methods and data structures, implementing various operations using modern JavaScript features.

## Learning Objectives
- Use map, filter, and reduce methods on arrays
- Work with Typed arrays
- Implement Set, Map, and WeakMap data structures

## Requirements
- All files interpreted on Ubuntu 20.04 LTS using Node.js 20.x and npm 9.x
- Code must use .js extension and pass all tests and lint checks
- All functions must be exported

## Setup
```bash
# Install Node.js 20.x
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

# Install dependencies
npm install --save-dev jest babel-jest @babel/core @babel/preset-env eslint
```

## Tasks Overview

1. **Basic list of objects**: Create a function that returns an array of student objects.
2. **Mapping**: Extract student IDs from a list of student objects using `map`.
3. **Filtering**: Filter students by location using `filter`.
4. **Reduce**: Sum student IDs using `reduce`.
5. **Combining methods**: Update student grades by city using `filter` and `map`.
6. **Typed Arrays**: Create an Int8 typed array with a specific value at a given position.
7. **Set data structure**: Convert an array to a Set.
8. **More Set operations**: Check if elements exist in a Set.
9. **Clean Set**: Extract and format values from a Set that start with a specific string.
10. **Map data structure**: Create a grocery list using Map.
11. **Map operations**: Update items with a specific quantity in a Map.

## Usage
Run tests with:
```bash
npm run test
```

Verify full project with:
```bash
npm run full-test
```

## Author
- Stan QUEUNIEZ
