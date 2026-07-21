const express = require("express");
const progressController = require("../controllers/progressController");

const router = express.Router();

router.post("/", progressController.updateLessonProgress);

module.exports = router;