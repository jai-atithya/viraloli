const mongoose = require("mongoose");

const unitSchema = new mongoose.Schema(
    {
        unitId: {
            type: Number,
            required: true,
            unique: true,
        },

        unitNumber: {
            type: Number,
            required: true,
            unique: true,
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
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Unit", unitSchema);