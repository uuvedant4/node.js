const express = require("express");
const { getForm, registerUser } = require("./UserController");

const router = express.Router();

router.route("/").get(getForm);
router.route("/register").post(registerUser);

module.exports = router;
