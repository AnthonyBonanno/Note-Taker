const fs = require('fs');
const notes = require('express').Router();


// GET db.json so that the notes can be retrieved -- GET request has no body
notes.get('/', (req, res) => {
  fs.readFile('db/db.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    } else {
      res.status(200).json(JSON.parse(data));
    }
  })
});

// POST -- POST request has a body
notes.post('/', (req, res) => {

  fs.readFile(('db/db.json'), (err, data) => {
    if (err) {
      console.log(err)
    } else {
      const parsedData = JSON.parse(data)
      parsedData.push(req.body)

      fs.writeFile(('db/db.json'), JSON.stringify(parsedData), (err) => {
        res.json('Successfully saved note!')
      });
    };


  });

});

module.exports = notes;