const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema(
    {
        unitId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Unit",
            required: true,
            index: true,
        },
        unitNumber:{
            type: Number,
            required: true
        },
        lessonNumber:{
            type: Number,
            required: true
        },
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

        required: {
            type: Boolean,
            required: true,
            default: false,
        },

        requiredParameters: {
            wpm: { type: Number, default: 0 },
            cpm: { type: Number, default: 0 },
            accuracy: { type: Number, default: 0 },
        }

    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Lesson", lessonSchema);