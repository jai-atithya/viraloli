const express = require("express");
const router = express.Router();

const unitController = require("../controllers/unitController");
const protectRoute = require("../middleware/protectRoute");

router.get("/all", unitController.getUnitDetails);
router.get("/current", protectRoute, unitController.getCurrentUnitDetails);
router.post("/add", unitController.addUnitDetails);

module.exports = router;