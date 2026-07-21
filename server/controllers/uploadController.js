const asyncHandler = require("express-async-handler");
const sharp = require("sharp");

const {
    saveUnitImage,
    deleteUnitFolder,
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

<<<<<<< HEAD
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
=======
    res.status(200).json({
        success: true,
        message: "Unit images uploaded.",
>>>>>>> d12e474 (Multer units images handling done)
    });
});

const deleteUnitImages = asyncHandler(async (req, res) => {
    const { unitNumber } = req.params;

    await deleteUnitFolder(unitNumber);

    res.json({
        success: true,
<<<<<<< HEAD
        message: `Unit ${unitNumber} images deleted!`
=======
>>>>>>> d12e474 (Multer units images handling done)
    });
});

module.exports = {
    uploadUnitImages,
    deleteUnitImages,
};