const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const { signout, signup } = require("../controllers/auth");

router.post(
  "/signup",
  [
    check("name", "Name should be atleast 3 characters").isLength({ min: 3 }),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Password should be atleast 6 characters").isLength({
      min: 6,
    }),
  ],
  signup
);

router.get("/signout", signout);

module.exports = router;
