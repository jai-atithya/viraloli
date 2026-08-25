require("dotenv").config();

const {
    ConnectToMongoDB,
    DisconnectFromMongoDB
} = require("../config/dbConnect");

const seedUploads = require("./seeders/uploadSeeder");
const seedGames = require("./seeders/gameSeeder");
const seedCharacters = require("./seeders/characterSeeder");
const seedWords = require("./seeders/wordSeeder");
const seedUnits = require("./seeders/unitSeeder");
const seedLessons = require("./seeders/lessonSeeder");

const seedDatabase = async () => {
    try {
        console.log("\n🌱 Starting ViralOli seeding...\n");

        await ConnectToMongoDB();

        // Copy required application files
        await seedUploads();

        // Seed database
        await seedGames();
        await seedCharacters();
        await seedWords();
        await seedUnits();
        await seedLessons();

        console.log("\n ViralOli seeding completed successfully!");
    } catch (error) {
        console.error("\n Seeding failed:", error.message);
        process.exitCode = 1;
    } finally {
        await DisconnectFromMongoDB();
    }
};

seedDatabase();