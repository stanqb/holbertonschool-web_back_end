import fs from 'fs/promises';

const readDatabase = async (filePath) => {
  try {
    // Use hardcoded path directly
    const dbPath = '/Users/stan/holbertonschool-web_back_end/Node_JS_basic/database.csv';
    console.log('Reading database from hardcoded path:', dbPath);
    
    const data = await fs.readFile(dbPath, 'utf8');
    
    const lines = data.trim().split('\n');
    const headers = lines[0].split(',');
    const studentRows = lines.slice(1).filter(line => line.trim() !== '');
    
    const studentsByField = {};
    
    studentRows.forEach((row) => {
      const student = row.split(',');
      const field = student[headers.indexOf('field')];
      const firstname = student[headers.indexOf('firstname')];
      
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      
      studentsByField[field].push(firstname);
    });
    
    return studentsByField;
  } catch (error) {
    console.error('Error in readDatabase:', error);
    throw new Error('Cannot load the database');
  }
};

export default readDatabase;
