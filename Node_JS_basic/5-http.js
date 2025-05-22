const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      let students = 0;
      const lines = data.split('\n');
      for (let counter = 0; counter < lines.length; counter += 1) {
        if (lines[counter].length > 0) students += 1;
      }
      if (students > 0) {
        students -= 1;
      }
      console.log(`Number of students: ${students}`);
      const classrooms = [];
      lines.slice(1).forEach((line) => {
        const parts = line.split(',');
        const field = parts[3];
        if (field && !classrooms.includes(field)) {
          classrooms.push(field);
        }
      });
      const grouped = {};
      classrooms.forEach((field) => {
        grouped[field] = [];
      });
      lines.slice(1).forEach((line) => {
        const parts = line.split(',');
        const firstname = parts[0];
        const field = parts[3];
        if (firstname && field) {
          grouped[field].push(firstname);
        }
      });
      classrooms.forEach((field) => {
        console.log(`Number of students in ${field}: ${grouped[field].length}. List: ${grouped[field].join(', ')}`);
      });
      resolve();
    });
  });
}

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      await countStudents(process.argv[2]);
      res.end();
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.end('Hello Holberton School!');
  }
});
app.listen(1245);

module.exports = app;
