const express = require('express')
const userController = require('../controllers/userController')
const router=express.Router();
const protectRoute = require("../middleware/protectRoute");

router.get('/check-username/:username', userController.checkUsername);
router.get('/user-data/me', protectRoute, userController.getMyData)

module.exports = router;