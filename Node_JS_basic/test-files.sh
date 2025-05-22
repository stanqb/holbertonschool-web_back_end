#!/bin/bash

echo "Testing 0-console.js..."
echo 'const displayMessage = require("./0-console"); displayMessage("Hello NodeJS!");' > test0.js
node test0.js
rm test0.js

echo -e "\nTesting 1-stdin.js..."
echo "John" | node 1-stdin.js

echo -e "\nTesting 2-read_file.js..."
echo 'const countStudents = require("./2-read_file"); countStudents("database.csv");' > test2.js
node test2.js
rm test2.js

echo -e "\nTesting 3-read_file_async.js..."
echo 'const countStudents = require("./3-read_file_async"); countStudents("database.csv").then(() => console.log("Done!"));' > test3.js
node test3.js
rm test3.js

echo -e "\nTesting 4-http.js..."
node 4-http.js &
sleep 2
curl localhost:1245
kill %1

echo -e "\nTesting 5-http.js..."
node 5-http.js database.csv &
sleep 2
curl localhost:1245/students
kill %1

echo -e "\nTesting 6-http_express.js..."
node 6-http_express.js &
sleep 2
curl localhost:1245
kill %1

echo -e "\nTesting 7-http_express.js..."
node 7-http_express.js database.csv &
sleep 2
curl localhost:1245/students
kill %1
