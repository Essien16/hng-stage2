const express = require("express");
const router = express.Router();
const {getUser, getUserById, createUser, updateUser, deleteUser} = require("../controllers/userController")

router.get("/", getUser);
router.get("/:user_id", getUserById);
router.put("/:user_id/", updateUser);
router.post("/", createUser);
router.delete("/:user_id", deleteUser);

module.exports = router;