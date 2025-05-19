const fs = require('fs');

function countStudents(path) {
  try {
    // Read the database file synchronously
    const data = fs.readFileSync(path, 'utf8');
    
    // Split data by lines and filter out empty lines
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
