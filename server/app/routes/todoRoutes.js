const router = require("express").Router();
const passport = require("passport");

const passportService = require("../services/passport");
const protectRoute = passport.authenticate("jwt", { session: false });

const {
  getAllTodos,
  addTodo,
  getOneTodoById,
  updateTodo,
  deleteOneTodo,
} = require("../controllers/todosController");

// @GET ALL TODOS
router.get("/", protectRoute, getAllTodos);

// @GET ONE TODO BY ID
router.get("/:id", getOneTodoById);

// @POST A TODO
router.post("/", addTodo);

// @UPDATE A TODO
router.put("/:id", updateTodo);

// @DELETE A TODO
router.delete("/:id", deleteOneTodo);

module.exports = router;
