//require express
const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const { readAndAppend, readFromFile } = require("../helpers/fsUtils");

//GET route for getting /notes
//POST route for submissions ((req.body))
app.post("/notes", (req, res) => {
  console.log(req.body);
  //deconstruct items into ((req.body))
  const { text, title } = req.body;
  //if text and title are there, save it!
  if (req.body) {
    const newNote = {
      username,
      tip,
      topic,
      tip_id: uuidv4(),
    };
    readAndAppend(newNote, "./db/db.json");
    res.json(`Note added successfully 🚀`);
  } else {
    res.error("Error in adding Note");
  }
});
app.delete("/notes/:id", (req, res) => {
  console.log(req.params.id);
  deleteAndUpdate(req.params.id, "./db/db.json");
  res.json(req.params.id);
});

module.exports = app;
