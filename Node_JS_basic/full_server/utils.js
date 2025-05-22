const fs = require('fs');
const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }
    const lines = data.split('\n');
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
    resolve(grouped);
  });
});
module.exports = readDatabase;
