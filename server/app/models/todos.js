const mongoose = require("mongoose");

const todos = mongoose.Schema({
  title: { type: String, required: [true, "Please add a title"] },
  content: String,
});

module.exports = Todos = mongoose.model("Todos", todos);
