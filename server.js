const express = require('express');
const app = express();
const mongodb = require('./db/connect');
const port = process.env.PORT || 8080;

app.use('/', require('./routes'))// http://localhost:8080

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});