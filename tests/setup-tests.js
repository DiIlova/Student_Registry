import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import studentsController from '../controllers/students-controller.js';
import { setup, teardown } from 'mocha';

let server;

setup(function () {
  const students = [
    { name: 'Steve', email: 'steve@gmail.com' },
    { name: 'Tina', email: 'tina@yahoo.com' }
  ];

  const app = express();
  server = http.createServer(app);

  app.set('view engine', 'pug');
  app.use(bodyParser.urlencoded({ extended: true }));

  studentsController.setup(app, students);
  server.listen(8888);
});

teardown(function () {
  server.close();
});
