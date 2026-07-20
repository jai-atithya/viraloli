const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            required: true,
            enum: [
                "intro",
                "teach",
                "practise",
                "characters",
                "words",
                "game",
                "test",
            ],
        },

        headingEnglish: {
            type: String,
            required: true,
            trim: true,
        },

        headingTamil: {
            type: String,
            required: true,
            trim: true,
        },

        descriptionEnglish: {
            type: String,
            required: true,
            trim: true,
        },

        descriptionTamil: {
            type: String,
            required: true,
            trim: true,
        },

        videoUrlEnglish: {
            url: {
                type: String,
                default: "",
                trim: true,
            },
            key: {
                type: String,
                default: "",
                trim: true,
            },
        },

        videoUrlTamil: {
            url: {
                type: String,
                default: "",
                trim: true,
            },
            key: {
                type: String,
                default: "",
                trim: true,
            },
        },

        game: {
            gameId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Game",
                default: null,
            },
            gameName: {
                type: String,
                default: "",
                trim: true,
            },
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Lesson", lessonSchema);