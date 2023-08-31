const express = require("express");
const router = express.Router()
const {
    registerUser,
} = require("../controllers/userController");


//Create a user
router.post('/',registerUser)


module.exports = router;