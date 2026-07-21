const express = require("express");
const router = express.Router();
const characterController = require("../controllers/characterController");


router.get("/all", characterController.getAllCharacters);
router.post("/add", characterController.createCharacter);
router.get("/all/lesson/:unlockLesson", characterController.getAllCharactersUnlocked);
router.get("/all/lesson/only/:unlockLesson", characterController.getAllCharacterInLesson);
router.post("/random", characterController.getRandomCharactersUnlocked);

module.exports = router;