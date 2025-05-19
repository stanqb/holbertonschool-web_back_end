const fs = require('fs').promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const lines = data.trim().split('\n');
        const headers = lines[0].split(',');
        const studentRows = lines.slice(1).filter(line => line.trim() !== '');
        
        // Count total students
        console.log(`Number of students: ${studentRows.length}`);
        
        // Group students by field
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
        
        // Log students by field
        for (const field in studentsByField) {
          const students = studentsByField[field];
          console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        }
        
        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
