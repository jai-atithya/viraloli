const express = require('express');
const router=express.Router();
const bloomController = require("../controllers/bloomController");
<<<<<<< HEAD
const protectRoute = require("../middleware/protectRoute");
const authorizeRoles = require("../middleware/authorizeRoute");

router.use(protectRoute);
router.use(authorizeRoles("admin"));
=======
>>>>>>> c1aa06e (Bloom filter creation done)

router.post("/init", bloomController.initializeBloomFilter);

module.exports = router;