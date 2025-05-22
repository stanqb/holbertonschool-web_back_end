const express = require('express');
const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
 fs.readFile(path, 'utf8', (err, data) => {
   if (err) {
     reject(new Error('Cannot load the database'));
     return;
   }

   const lines = data.trim().split('\n');
   const students = lines.slice(1).filter((line) => line.trim() !== '');

   let result = `Number of students: ${students.length}\n`;

   const fields = {};
   students.forEach((student) => {
     const [firstname, , , field] = student.split(',');
     if (!fields[field]) {
       fields[field] = [];
     }
     fields[field].push(firstname);
   });

   Object.keys(fields).forEach((field) => {
     result += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
   });

   resolve(result);
 });
});

const app = express();

app.get('/', (req, res) => {
 res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
 res.write('This is the list of our students\n');
 try {
   const data = await countStudents(process.argv[2]);
   res.end(data);
 } catch (error) {
   res.end(error.message);
 }
});

app.listen(1245);

module.exports = app;
