const express = require("express");
const router = express.Router();

const { imageUpload, videoUpload } = require("../middleware/uploadHandler");
const uploadController = require("../controllers/uploadController");
const protectRoute = require("../middleware/protectRoute");

router.use(protectRoute);

router.post(
    "/unit/:unitNumber",
    imageUpload.fields([
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

router.post(
    "/unit/:unitNumber/intro",
    videoUpload.fields([
        { name: "introTamil", maxCount: 1 },
        { name: "introEnglish", maxCount: 1 }
    ]),
    uploadController.uploadIntroVideo
);

router.delete(
    "/unit/:unitNumber/intro",
    uploadController.removeIntroVideo
);

module.exports = router;