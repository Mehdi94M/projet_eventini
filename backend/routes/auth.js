const express = require("express");
const { register, login, current } = require("../controllers/authController");
const isAuth = require("../middlewares/isAuth");
const {
  registerRules,
  validator,
  loginRules,
} = require("../middlewares/validator");
const router = express.Router();

// register
// method post
// req.body
router.post("/signup", registerRules, validator, register);
// connected
// method post
// req.body
router.post("/signin", loginRules, validator, login);

// get current user
// method get
router.get("/current", isAuth, current);

module.exports = router;
