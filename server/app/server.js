const express = require("express");
const app = express();
//using dotenv
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const db = require("./db/database");
const router = express.Router();
// Importing routes
const todoRoutes = require("./routes/todoRoutes");
const authRouter = require("./routes/authRoutes");
// middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database start
db();

// http://localhost:3001/ (base route)
router.get("/", (req, res) => {
  try {
    res
      .status(200)
      .json({ message: `METHOD - ${req.method}, Status - ${res.statusCode}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// <<<< api Routes >>>>
router.use("/api/v1/todos", todoRoutes);
router.use("/api/v1/auth", authRouter);

// setting port
const port = process.env.PORT || 3001;
module.exports = { app, port, router };
