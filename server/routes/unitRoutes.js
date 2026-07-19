const express = require("express");
const router = express.Router();

const unitController = require("../controllers/unitController");

router.get("/all", unitController.getUnitDetails);
router.post("/add", unitController.addUnitDetails);

module.exports = router;