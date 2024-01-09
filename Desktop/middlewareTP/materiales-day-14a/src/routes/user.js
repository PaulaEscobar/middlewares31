const express = require("express");
const router = express.Router();
const authUser = require("../middlewares/authUser");
const userController = require("../controllers/userController");

router.get("/", authUser, userController.admin);

module.exports = router;
