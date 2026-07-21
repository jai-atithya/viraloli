const express = require("express");
const router = express.Router();
const wordController = require("../controllers/wordController");

router.get("/all", wordController.getAllWords);
router.post("/add", wordController.createWord);
router.get("/all/lesson/:unlockLesson", wordController.getAllWordsUnlocked);
router.get("/all/lesson/only/:unlockLesson", wordController.getAllWordsInLesson);
router.post("/random", wordController.getRandomWordsUnlocked);

module.exports = router;