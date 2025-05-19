import readDatabase from '../utils';
import path from 'path';

class StudentsController {
  static getAllStudents(request, response) {
    // Use a fixed path to the database
    const dbFile = path.resolve(process.cwd(), 'database.csv');
    
    readDatabase(dbFile)
      .then((studentsByField) => {
        let responseText = 'This is the list of our students\n';
        
        // Get fields sorted alphabetically (case insensitive)
        const sortedFields = Object.keys(studentsByField).sort((a, b) => 
          a.localeCompare(b, 'en', { sensitivity: 'base' })
        );
        
        for (const field of sortedFields) {
          const students = studentsByField[field];
          responseText += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
        }
        
        response.status(200).send(responseText);
      })
      .catch((error) => {
        response.status(500).send(error.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const dbFile = path.resolve(process.cwd(), 'database.csv');
    const { major } = request.params;
    
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    
    readDatabase(dbFile)
      .then((studentsByField) => {
        if (!studentsByField[major]) {
          response.status(500).send(`No students found for major ${major}`);
          return;
        }
        
        const students = studentsByField[major];
        response.status(200).send(`List: ${students.join(', ')}`);
      })
      .catch((error) => {
        response.status(500).send(error.message);
      });
  }
}

export default StudentsController;
