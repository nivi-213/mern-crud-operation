
const express = require("express");
const router = express.Router();
const {
  addUser,
  getAllUsers,
  getSingleUsers,
  updateUsers,
  deleteUsers,
} = require("../controller/userController");

router.post("/add", addUser);
router.get("/get", getAllUsers);
router.get("/:id", getSingleUsers);
router.put("/update/:id", updateUsers);
router.delete("/delete/:id", deleteUsers);
module.exports = router;
