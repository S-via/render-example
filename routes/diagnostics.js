const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => {
  // TODO: Logic for sending all the content of db/diagnostics.json
 res.status(200).json(diagnostics) 
});

// POST Route for a error logging
diagnostics.post('/', (req, res) => {
  // TODO: Logic for appending data to the db/diagnostics.json file
  const errors = req.body.errors
  const diagnostic  = {
    time: Date.now(),
    error_id: uuidv4(),
    errors
  }
readAndAppend(diagnostic,'./db/diagnostics.json');
});

module.exports = diagnostics;
