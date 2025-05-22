const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);
      
      console.log(`Number of students: ${students.length}`);
      
      const fields = {};
      students.forEach((student) => {
        const [firstname, , , field] = student.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });
      
      Object.keys(fields).forEach((field) => {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
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
