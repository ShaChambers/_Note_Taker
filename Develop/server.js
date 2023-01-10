//packages required
const express = require("express");
const path = require("path");
const fs = require("fs");

//init server 3001
const PORT = 3001;
const app = express();

//middleware app.use's
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", api);
//routes go below!
