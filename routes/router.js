const notes = require('express').Router();

// Import our files containing our routes
const notesRouter = require('./notes');

notes.use('/notes', notesRouter);

module.exports = notes;