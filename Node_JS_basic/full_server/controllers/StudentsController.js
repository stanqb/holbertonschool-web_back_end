const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    const databaseFile = process.argv[2];
    
    readDatabase(databaseFile)
      .then((fields) => {
        let responseText = 'This is the list of our students';
        const sortedFields = Object.keys(fields).sort();
        
        sortedFields.forEach((field) => {
          responseText += `\nNumber of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
        });
        
        response.status(200).send(responseText);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const databaseFile = process.argv[2];
    const { major } = request.params;
    
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    
    readDatabase(databaseFile)
      .then((fields) => {
        const students = fields[major] || [];
        response.status(200).send(`List: ${students.join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
