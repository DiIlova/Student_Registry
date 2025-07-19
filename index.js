import express from 'express';
import bodyParser from 'body-parser';
import studentsController from './controllers/students-controller.js';
import students from './models/students-model.js';

const app = express();

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));

studentsController.setup(app, students);

let port = process.argv[2] || process.env['PORT'] || 8080;

app.listen(port, () => {
  console.log(`App started. Listening at http://localhost:${port}`);
})
.on('error', function(err) {
  if (err.code === 'EADDRINUSE')
    console.error(`Port ${port} busy.`);
  else 
    throw err;
});
