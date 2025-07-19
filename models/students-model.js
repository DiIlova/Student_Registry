import fs from 'fs';

const students = JSON.parse(
  fs.readFileSync('./models/students.json', 'utf-8')
);

export default students;
