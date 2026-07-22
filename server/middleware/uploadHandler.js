const multer = require("multer");

// Shared image filter
const imageFileFilter = (req, file, cb) => {
    const allowedMimeTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/webp",
        "image/avif",
        "image/gif",
    ];

    if (!allowedMimeTypes.includes(file.mimetype)) {
        return cb(
            Object.assign(new Error("Only image files are allowed."), {
                statusCode: 400,
            }),
            false
        );
    }

    cb(null, true);
};

const imageUpload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
    fileFilter: imageFileFilter,
});

// Shared video filter
const videoFileFilter = (req, file, cb) => {
    const allowedMimeTypes = [
        "video/mp4",
        "video/webm",
        "video/ogg",
        "video/quicktime",     // .mov
        "video/x-matroska",    // .mkv
        "video/x-msvideo",     // .avi
    ];

    if (!allowedMimeTypes.includes(file.mimetype)) {
        return cb(
            Object.assign(new Error("Only video files are allowed."), {
                statusCode: 400,
            }),
            false
        );
    }

    cb(null, true);
};

const videoUpload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 100 * 1024 * 1024, // 100 MB
    },
    fileFilter: videoFileFilter,
});

module.exports = {
    imageUpload, videoUpload
};