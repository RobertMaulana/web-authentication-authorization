const express = require('express');
const router = express.Router();
const userController = require("../controllers/user_controller.js");
const helperPassport = require('../helpers/passport');
const token = require('../helpers/token');

router.post("/signup", userController.createUser);
router.post("/login", helperPassport, userController.loginUser);
router.get("/", token, userController.getUser);
router.put("/:id", token, userController.updateUser);
router.delete("/:id", token, userController.removeUser);
router.delete("/:id", token, userController.removeUser);

module.exports = router
