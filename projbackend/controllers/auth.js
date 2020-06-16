const User = require("../models/user");
const { check, validationResult } = require("express-validator");

exports.signout = (req, res) => {
  res.json({
    msg: "User signout",
  });
};

exports.signup = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ error: errors.array()[0].msg });
  }

  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: "NOT able to save user in Database",
      });
    }
    res.json({
      name: user.name,
      email: user.email,
      id: user._id,
    });
  });
};
