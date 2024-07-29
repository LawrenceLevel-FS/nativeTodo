const router = require("express").Router();
const passport = require("passport");
const passportService = require("../services/passport");
const AuthenticationController = require("../controllers/authentication_controller");

const requireLogin = passport.authenticate("local", { session: false });

// http://localhost:3001/apiv1/auth

// @GET all posts
router.post("/", AuthenticationController.signup);
router.post("/signin", requireLogin, AuthenticationController.signIn);

module.exports = router;
