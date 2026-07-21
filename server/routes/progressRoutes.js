const express = require("express");
const progressController = require("../controllers/progressController");

const router = express.Router();

router.post("/", progressController.updateLessonProgress);
router.get("/:userId/:unitId", progressController.getProgress);

module.exports = router;