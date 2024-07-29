const User = require("../models/user.js");
const jwt = require("jwt-simple");
const config = require("../config.js");

const tokenForUser = (user) => {
  const timestamp = new Date().getTime();
  return jwt.encode(
    {
      sub: user.id,
      iat: timestamp,
    },
    config.secret
  );
};

exports.signIn = (req, res, next) => {
  const user = req.user;
  res.send({ token: tokenForUser(user), user_id: user._id });
};

exports.signup = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(422)
      .json({ error: "Please provide your email or password" });
  }

  try {
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(422).json({ error: "Email is already in use" });
    }

    const user = new User({
      email: email,
      password: password,
    });

    await user.save();
    res.json({ user_id: user._id, token: tokenForUser(user) });
  } catch (err) {
    next(err);
  }
};
