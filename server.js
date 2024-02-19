const express = require('express');
const path = require('path');
const notesData = require('./db/db.json');
const fs = require('fs');

const PORT = 3001

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// GET db.json so that the notes can be retrieved
app.get('/api/notes', (req, res) => res.json());

// POST 
app.post('/api/notes', (req, res) => {
  console.log(__dirname, '/db/db.json');
  fs.readFile(path.join(__dirname, '/db/db.json'), (err, data) => {
    const parsedData = JSON.parse(data)
    parsedData.push(req.body)
    fs.writeFile(path.join(__dirname, '/db/db.json'), JSON.stringify(parsedData), (err) => {
      res.json('Successfully saved note!')
    });
  });

});

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