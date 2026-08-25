const Lesson = require("../../models/lessonModel");
const Unit = require("../../models/unitModel");
const lessons = require("../data/lessons.json");

const seedLessons = async () => {
    try {
        console.log("🌱 Seeding Lessons...");

        await Lesson.deleteMany({});

        if (lessons.length === 0) {
            console.log("No lessons to seed.");
            return;
        }

        const lessonsToInsert = [];

        for (const lesson of lessons) {

            // Find the Unit using the stable unitNumber
            const unit = await Unit.findOne({
                unitNumber: lesson.unitNumber
            });

            if (!unit) {
                throw new Error(
                    `Unit ${lesson.unitNumber} not found for lesson ${lesson.lessonNumber}`
                );
            }

            lessonsToInsert.push({
                ...lesson,
                unitId: unit._id
            });
        }

        await Lesson.insertMany(lessonsToInsert);

        console.log(
            `Lessons seeded successfully: ${lessonsToInsert.length}`
        );

    } catch (error) {
        console.error("Error seeding Lessons:", error.message);
        throw error;
    }
};

module.exports = seedLessons;