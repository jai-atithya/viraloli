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

    await fs.rm(dir, {
        recursive: true,
        force: true,
    });
};

module.exports = {
    saveUnitImage: saveUnitImageLocal,
    deleteUnitFolder: deleteUnitFolderLocal,
};