const express = require("express");
const progressController = require("../controllers/progressController");
const protectRoute = require("../middleware/protectRoute")

const router = express.Router();

router.post("/", progressController.updateLessonProgress);
router.get("/current", protectRoute, progressController.getCurrentProgressDetails);
router.get("/:userId/:unitId", progressController.getProgress);

module.exports = router;