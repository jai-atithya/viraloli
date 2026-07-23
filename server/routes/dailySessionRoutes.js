const express = require("express");
const router = express.Router();
const dailySessionController = require("../controllers/dailySessionController");
const protectRoute = require("../middleware/protectRoute");

router.use(protectRoute);

router.post("/add-xp", dailySessionController.addXP);
router.get("/week/:userId", dailySessionController.getCurrentWeekSessions);
router.get("/year/:username", dailySessionController.getPastYearSessions);
router.get("/:username/:year", dailySessionController.getAnyYearSessions);

module.exports = router;