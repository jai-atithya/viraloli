const express = require("express");
const router = express.Router();

const lessonController = require("../controllers/lessonController");

router.get("/:unitNumber/:lessonNumber", lessonController.getLessonByNumber);
router.post("/add", lessonController.addLesson);

module.exports = router;