'use strict';

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import favicon from 'serve-favicon';
import debug from 'debug';

let app = express();

// Tell Express where is our favicon
app.use(favicon('dist/public/favicon.png'));
// Tell Express that messages bodies will be JSON formatted
app.use(bodyParser.json());
// Only parses urlencoded bodies (gzip and deflate enabled)
app.use(bodyParser.urlencoded({
  extended: false
}));

// Add cookie parsing ability
app.use(cookieParser());

// Set default static files path
app.use(express.static('dist/public', {
  etag: false
}));

// ROUTING SET UP GOES HERE

// Unknown route handler
app.use((req, res) => {
  res.status(404).send('The requested page doesn\'t exist!');
});

// Errors handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err);
});

// Connect to database
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/my-portfolio-dev', {
  promiseLibrary: require('bluebird')
}).then(() => {
  console.log('Successfully connected to MongoDB');
  // Get port from environment and store in Express.
  const port = parseInt(process.env.PORT, 10) || 8080;

  // Finally, create the HTTP server
  app.listen(port, () => {
    console.log('Listening on port ' + port);
  });
}).catch((err) => {
  if (err) throw err;
});