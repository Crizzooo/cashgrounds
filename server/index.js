const path = require('path');
const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');

// const db = require('./db');

if (process.env.NODE_ENV === 'development') require('../secrets.js');



console.log('p.e.port: ', process.env.PORT);
const PORT = process.env.PORT || 3000;


const app = express();

//logging middleware
app.use(volleyball);

//body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//redirect api routes
app.use('/api', require('./api'));

app.use(express.static(path.join(__dirname, '..', 'client/src/public')));

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'client/src/public/index.html'));
});

//Error Handler
app.use('/', (err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Server error.');
});

// let sync = process.env.NODE_ENV === 'development' ? { force: true} : {};
// db.sync(sync)
// .then( () => {
//   if (process.env.NODE_ENV === 'development' ) console.log('get developing, homie')
//   console.log('db synced correctly!');
  app.listen(PORT, () => {
    console.log('Server listening on Port: ', PORT);
  });
// })
// .catch( (err) => {
//   console.log('could not sync db!');
//   console.log(err);
// });
