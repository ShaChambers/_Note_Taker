//packages required
const express = require("express");
const app = express();
const path = require("path");
const api = require("./routes/notes");
const uuid = require("./tools/uuid");

// const api = require("/api");
//init server 3001
const PORT = process.env.PORT || 3001;

//middleware app.use's
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", api);
//routes go below!
//NOTES-GET-ROUTE
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);
//INDEX-GET-ROUTE
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);
//make sure app is listening
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
