const express = require('express');
const router=express.Router();
const bloomController = require("../controllers/bloomController");
const protectRoute = require("../middleware/protectRoute");
const authorizeRoles = require("../middleware/authorizeRoute");

router.use(protectRoute);
router.use(authorizeRoles("admin"));

router.post("/init", bloomController.initializeBloomFilter);

module.exports = router;