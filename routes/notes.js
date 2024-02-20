const notes = require('express').Router();
const fs = require('fs');

// GET db.json so that the notes can be retrieved -- GET request has no body
app.get('/api/notes', (req, res) => res.json());

// POST -- POST request has a body
app.post('/api/notes', (req, res) => {

  fs.readFile(path.join(__dirname, '/db/db.json'), (err, data) => {
    if (err) {
      console.log(err)
    } else {
      const parsedData = JSON.parse(data)
      parsedData.push(req.body)
    };

    fs.writeFile(path.join(__dirname, '/db/db.json'), JSON.stringify(parsedData), (err) => {
      res.json('Successfully saved note!')
    });
  });

});