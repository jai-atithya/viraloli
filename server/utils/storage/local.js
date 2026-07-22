const fs = require("fs/promises");
const path = require("path");

const BASE = path.join(__dirname, "../../uploads");

const saveUnitImageLocal = async (buffer, unitNumber, fileName) => {
    const dir = path.join(BASE, "units", `U${unitNumber}`);

    await fs.mkdir(dir, {
        recursive: true,
    });

    await fs.writeFile(
        path.join(dir, fileName),
        buffer
    );

    return `units/U${unitNumber}/${fileName}`;
};

const deleteUnitFolderLocal = async (unitNumber) => {
    const dir = path.join(
        BASE,
        "units",
        `U${unitNumber}`
    );

    try {
        await fs.access(dir);
    } catch {
        throw Object.assign(
            new Error(`Unit ${unitNumber} images not found`),
            {
                statusCode: 404,
            }
        );
    }

    await fs.rm(dir, {
        recursive: true,
        force: true,
    });
};

const saveIntroVideoLocal = async (
    buffer,
    unitNumber,
    fileName
) => {
    const dir = path.join(
        BASE,
        "units",
        `U${unitNumber}`
    );

    await fs.mkdir(dir, {
        recursive: true,
    });

    await fs.writeFile(
        path.join(dir, fileName),
        buffer
    );

    return `units/U${unitNumber}/${fileName}`;
};

const deleteIntroVideoLocal = async (unitNumber) => {
    const dir = path.join(
        BASE,
        "units",
        `U${unitNumber}`
    );

    try {
        const files = await fs.readdir(dir);

        const introFiles = files.filter(
            (file) =>
                file.startsWith("introTamil.") ||
                file.startsWith("introEnglish.")
        );

        if (introFiles.length === 0) {
            throw new Error();
        }

        await Promise.all(
            introFiles.map((file) =>
                fs.unlink(path.join(dir, file))
            )
        );
    } catch {
        throw Object.assign(
            new Error(`Unit ${unitNumber} intro videos not found`),
            {
                statusCode: 404,
            }
        );
    }
};

module.exports = {
    saveUnitImage: saveUnitImageLocal,
    deleteUnitFolder: deleteUnitFolderLocal,
    saveIntroVideo: saveIntroVideoLocal,
    deleteIntroVideo: deleteIntroVideoLocal
};