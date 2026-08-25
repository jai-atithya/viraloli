const fs = require("fs");
const path = require("path");

const seedUploads = async () => {
    try {
        console.log("🌱 Seeding Uploads...");

        // Source:
        // server/seed/data/uploads
        const sourceDir = path.join(__dirname, "../data/uploads");

        // Destination:
        // server/uploads
        const destinationDir = path.join(__dirname, "../../uploads");

        // Check if seed uploads directory exists
        if (!fs.existsSync(sourceDir)) {
            console.log("⚠️ No seed uploads directory found. Skipping uploads.");
            return;
        }

        // Remove existing uploads directory
        if (fs.existsSync(destinationDir)) {
            fs.rmSync(destinationDir, {
                recursive: true,
                force: true
            });
        }

        // Copy seed uploads → server/uploads
        fs.cpSync(sourceDir, destinationDir, {
            recursive: true
        });

        console.log("✅ Uploads seeded successfully.");
    } catch (error) {
        console.error("❌ Error seeding Uploads:", error.message);
        throw error;
    }
};

module.exports = seedUploads;