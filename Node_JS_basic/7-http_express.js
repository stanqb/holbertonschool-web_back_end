const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

// Function to count students from a file asynchronously
const countStudents = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.trim().split('\n');
    const headers = lines[0].split(',');
    const studentRows = lines.slice(1).filter(line => line.trim() !== '');
    
    let output = `Number of students: ${studentRows.length}\n`;
    
    const studentsByField = {};
    
    studentRows.forEach(row => {
      const student = row.split(',');
      const field = student[headers.indexOf('field')];
      const firstname = student[headers.indexOf('firstname')];
      
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      
      studentsByField[field].push(firstname);
    });
    
    for (const field in studentsByField) {
      const students = studentsByField[field];
      output += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
    }
    
    return output;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

// Define routes
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const dbFilename = process.argv[2] || '';
  res.write('This is the list of our students\n');
  
  try {
    const students = await countStudents(dbFilename);
    res.end(students);
  } catch (error) {
    res.end(`${error.message}`);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
