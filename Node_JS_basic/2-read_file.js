const fs = require('fs');
function countStudents(path) {
  let students = 0;
  try {
    const data = fs.readFileSync(path, 'utf-8');
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
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
