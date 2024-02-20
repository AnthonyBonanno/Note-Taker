const notes = require('express').Router();

// Import our files containing our routes
const feedbackRouter = require('./feedback');
const tipsRouter = require('./tips');

notes.use('/router', router);

module.exports = notes;