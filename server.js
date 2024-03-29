const express = require('express');
const path = require('path');
const api = require('./routes/router');

const PORT = process.env.PORT || 3001

const app = express();

// Middleware for parsing JSON and urlencoded form data, as well as serving up static assets from the public folder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Send all the requests that begin with /api to the index.js file
app.use('/api', api);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET Route for homepage
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);