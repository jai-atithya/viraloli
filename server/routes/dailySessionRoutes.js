const express = require("express");
const router = express.Router();
const dailySessionController = require("../controllers/dailySessionController");
const protectRoute = require("../middleware/protectRoute");

router.use(protectRoute);

router.post("/add-xp", dailySessionController.addXP);
<<<<<<< HEAD
router.get("/week/:userId", dailySessionController.getPast7DaysSessions);
router.get("/year/:userId", dailySessionController.getPastYearSessions);
=======
>>>>>>> 7f1a67e (session creation done)

module.exports = router;