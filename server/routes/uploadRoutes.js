const express = require("express");
const router = express.Router();

const { upload } = require("../middleware/uploadHandler");
const uploadController = require("../controllers/uploadController");
const protectRoute = require("../middleware/protectRoute");

router.use(protectRoute);

router.post(
    "/unit/:unitNumber",
    upload.fields([
        { name: "thumbnail", maxCount: 1 },
        { name: "character1", maxCount: 1 },
        { name: "character2", maxCount: 1 },
        { name: "character3", maxCount: 1 },
        { name: "character4", maxCount: 1 },
        { name: "character5", maxCount: 1 },
        { name: "character6", maxCount: 1 },
        { name: "character7", maxCount: 1 },
    ]),
    uploadController.uploadUnitImages
);

router.delete(
    "/unit/:unitNumber",
    uploadController.deleteUnitImages
);

module.exports = router;