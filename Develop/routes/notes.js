//require express
const express = require("express");
const app = express();
// const { v4: uuidv4 } = require("uuid");
const { readAndAppend, readFromFile } = require("../tools/fsUtils");
const uuid = require("../tools/uuid");

//GET route for getting /notes
app.get("/notes", (req, res) => {
  // Logic for sending all the content of db/db.json
  readFromFile("./db/db.json").then((note) => res.json(JSON.parse(note)));
});
//POST route for submissions ((req.body))
app.post("/notes", (req, res) => {
  //deconstruct items into ((req.body))
  const { text, title } = req.body;
  //if text and title are there, save it!
  if (req.body) {
    const newNote = {
      text,
      title,
      id: uuid(),
    };

    readAndAppend(newNote, "./db/db.json");

    const response = {
      status: "yes",
      body: newNote,
    };

    res.json(response);
  } else {
    res.error("Error in adding Note");
  }
});
module.exports = app;
