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

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
    fileFilter: imageFileFilter,
});

module.exports = {
    upload
};