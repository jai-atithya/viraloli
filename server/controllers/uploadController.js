const asyncHandler = require("express-async-handler");
const sharp = require("sharp");
const path = require("path");
const unitService = require("../services/unitService");

const {
    saveUnitImage,
    deleteUnitFolder,
    saveIntroVideo,
    deleteIntroVideo
} = require("../utils/storage");

const processImage = (buffer) =>
    sharp(buffer)
        .resize(1024, 1024, {
            fit: "inside",
            withoutEnlargement: true,
        })
        .webp({ quality: 90 })
        .toBuffer();

const uploadUnitImages = asyncHandler(async (req, res) => {
    const { unitNumber } = req.params;

    if (!req.files.thumbnail)
        throw Object.assign(new Error("Thumbnail is required"), {
            statusCode: 400,
        });

    await saveUnitImage(
        await processImage(req.files.thumbnail[0].buffer),
        unitNumber,
        "thumbnail.webp"
    );

    for (let i = 1; i <= 7; i++) {
        const file = req.files[`character${i}`];

        if (!file)
            throw Object.assign(
                new Error(`character${i} is required`),
                {
                    statusCode: 400,
                }
            );

        await saveUnitImage(
            await processImage(file[0].buffer),
            unitNumber,
            `${i}.webp`
        );
    }

    const paths = {
        thumbnail: `units/U${unitNumber}/thumbnail.webp`,
        characters: {},
    };

    for (let i = 1; i <= 7; i++) {
        paths.characters[`character${i}`] =
            `units/U${unitNumber}/${i}.webp`;
    }

    return res.status(200).json({
        success: true,
        data: paths,
    });
});

const deleteUnitImages = asyncHandler(async (req, res) => {
    const { unitNumber } = req.params;

    await deleteUnitFolder(unitNumber);

    res.json({
        success: true,
        message: `Unit ${unitNumber} images deleted!`
    });
});

const uploadIntroVideo = asyncHandler(async (req, res) => {
    const { unitNumber } = req.params;

    const unit = await unitService.getUnitByNumber(unitNumber);

    if (!unit) {
        throw Object.assign(
            new Error(`Unit ${unitNumber} does not exist`),
            {
                statusCode: 404,
            }
        );
    }

    if (!req.files.introTamil) {
        throw Object.assign(
            new Error("Tamil intro video is required"),
            { statusCode: 400 }
        );
    }

    if (!req.files.introEnglish) {
        throw Object.assign(
            new Error("English intro video is required"),
            { statusCode: 400 }
        );
    }

    // Delete existing intro videos
    try {
        await deleteIntroVideo(unitNumber);
    } catch (err) {
        if (err.statusCode !== 404) {
            throw err;
        }
    }

    const tamilExtension = path.extname(
        req.files.introTamil[0].originalname
    );

    const englishExtension = path.extname(
        req.files.introEnglish[0].originalname
    );

    const tamilPath = await saveIntroVideo(
        req.files.introTamil[0].buffer,
        unitNumber,
        `introTamil${tamilExtension}`,
        req.files.introTamil[0].mimetype
    );

    const englishPath = await saveIntroVideo(
        req.files.introEnglish[0].buffer,
        unitNumber,
        `introEnglish${englishExtension}`,
        req.files.introEnglish[0].mimetype
    );

    res.status(200).json({
        success: true,
        data: {
            introTamil: tamilPath,
            introEnglish: englishPath,
        },
    });
});

const removeIntroVideo = asyncHandler(async (req, res) => {
    const { unitNumber } = req.params;
    await deleteIntroVideo(unitNumber);

    res.json({
        success: true,
        message: `Unit ${unitNumber} intro video deleted!`,
    });
});

module.exports = {
    uploadUnitImages,
    deleteUnitImages,
    uploadIntroVideo,
    removeIntroVideo,
};