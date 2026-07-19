const express = require('express');
const router=express.Router();
const bloomController = require("../controllers/bloomController");
<<<<<<< HEAD
const protectRoute = require("../middleware/protectRoute");
const authorizeRoles = require("../middleware/authorizeRoute");

router.use(protectRoute);
router.use(authorizeRoles("admin"));
=======
>>>>>>> fe667b7dec5254534068d613650455d09696a47b

router.post("/init", bloomController.initializeBloomFilter);

module.exports = router;