const express = require('express');
const router=express.Router();
const bloomController = require("../controllers/bloomController");

router.post("/init", bloomController.initializeBloomFilter);

module.exports = router;