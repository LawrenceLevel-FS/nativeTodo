const Todo = require("../models/todos");

// @GET ALL TODOS
const getAllTodos = async (req, res) => {
  const todos = await Todo.find();
  try {
    res.status(200).json({ todos: todos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @GET ONE TODO BY ID
const getOneTodoById = async (req, res) => {
  const id = req.params.id;

  try {
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ message: "No Todos where found" });
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @POST A TODO
const addTodo = async (req, res) => {
  const todo = req.body;
  try {
    res.status(201).send(todo);
    console.log(todo, "added todo");
    await Todo.create(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(todo, "todo failed");
  }
};

// @UPDATE A TODO
const updateTodo = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, {
      upsert: true,
    });

    if (!updateTodo) {
      res.status(404).json({ message: "No Todo was found" });
    }
    res.status(202).json({
      method: `Method - ${req.method}`,
      message: "Todo was updated",
      data: updatedTodo,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @DELETE A TODO
const deleteOneTodo = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json({
      method: `Method - ${req.method}`,
      message: "Todo was deleted successful",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllTodos,
  addTodo,
  deleteOneTodo,
  getOneTodoById,
  updateTodo,
};
