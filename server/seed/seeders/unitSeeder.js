const Unit = require("../../models/unitModel");
const units = require("../data/units.json");

const seedUnits = async () => {
    try {
        console.log("🌱 Seeding Units...");

        await Unit.deleteMany({});

        if (units.length > 0) {
            await Unit.insertMany(units);
        }

        console.log(`Units seeded successfully: ${units.length}`);
    } catch (error) {
        console.error("Error seeding Units:", error.message);
        throw error;
    }
};

module.exports = seedUnits;