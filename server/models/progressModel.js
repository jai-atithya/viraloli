const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true,
        },
        unitId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Unit",
            required: true,
            index: true,
        },
        unitNumber:{
            type:Number,
            required: true,
            index: true
        },
        unitNameEnglish: {
            type: String,
            required: true,
            trim: true,
        },

        unitNameTamil: {
            type: String,
            required: true,
            trim: true,
        },

        unitDescriptionEnglish: {
            type: String,
            required: true,
            trim: true,
        },

        unitDescriptionTamil: {
            type: String,
            required: true,
            trim: true,
        },

        thumbnail: {
            type: String,
            required: true,
            trim: true
        },

        characters: {
            type: {
                character1: { type: String, required: true, trim: true },
                character2: { type: String, required: true, trim: true },
                character3: { type: String, required: true, trim: true },
                character4: { type: String, required: true, trim: true },
                character5: { type: String, required: true, trim: true },
                character6: { type: String, required: true, trim: true },
                character7: { type: String, required: true, trim: true },
            },
            required: true,
        },
        lesson1: {
            wpm: { type: Number, default: 0 },
            cpm: { type: Number, default: 0 },
            accuracy: { type: Number, default: 0 },
            stars: { type: Number, default: 0, min: 0, max: 3 },
        },
        lesson2: {
            wpm: { type: Number, default: 0 },
            cpm: { type: Number, default: 0 },
            accuracy: { type: Number, default: 0 },
            stars: { type: Number, default: 0, min: 0, max: 3 },
        },
        lesson3: {
            wpm: { type: Number, default: 0 },
            cpm: { type: Number, default: 0 },
            accuracy: { type: Number, default: 0 },
            stars: { type: Number, default: 0, min: 0, max: 3 },
        },
        lesson4: {
            wpm: { type: Number, default: 0 },
            cpm: { type: Number, default: 0 },
            accuracy: { type: Number, default: 0 },
            stars: { type: Number, default: 0, min: 0, max: 3 },
        },
        lesson5: {
            wpm: { type: Number, default: 0 },
            cpm: { type: Number, default: 0 },
            accuracy: { type: Number, default: 0 },
            stars: { type: Number, default: 0, min: 0, max: 3 },
        },
        lesson6: {
            wpm: { type: Number, default: 0 },
            cpm: { type: Number, default: 0 },
            accuracy: { type: Number, default: 0 },
            stars: { type: Number, default: 0, min: 0, max: 3 },
        },
        lesson7: {
            wpm: { type: Number, default: 0 },
            cpm: { type: Number, default: 0 },
            accuracy: { type: Number, default: 0 },
            stars: { type: Number, default: 0, min: 0, max: 3 },
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Progress", progressSchema);