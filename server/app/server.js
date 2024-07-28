const express = require("express");
const app = express();
//using dotenv
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const db = require("./db/database");

// middleware
app.use(morgan("dev"));
app.use(cors());

// Database start
db();

// setting port
const port = process.env.PORT || 3001;
module.exports = { app, port };
