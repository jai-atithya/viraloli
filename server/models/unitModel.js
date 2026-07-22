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
                character1: {
                    nameEnglish: {
                        type: String,
                        required: true,
                        trim: true,
                    },
                    nameTamil: {
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
                    url: {
                        type: String,
                        required: true,
                        trim: true,
                    },
                },

                character2: {
                    nameEnglish: { type: String, required: true, trim: true },
                    nameTamil: { type: String, required: true, trim: true },
                    descriptionEnglish: { type: String, required: true, trim: true },
                    descriptionTamil: { type: String, required: true, trim: true },
                    url: { type: String, required: true, trim: true },
                },

                character3: {
                    nameEnglish: { type: String, required: true, trim: true },
                    nameTamil: { type: String, required: true, trim: true },
                    descriptionEnglish: { type: String, required: true, trim: true },
                    descriptionTamil: { type: String, required: true, trim: true },
                    url: { type: String, required: true, trim: true },
                },

                character4: {
                    nameEnglish: { type: String, required: true, trim: true },
                    nameTamil: { type: String, required: true, trim: true },
                    descriptionEnglish: { type: String, required: true, trim: true },
                    descriptionTamil: { type: String, required: true, trim: true },
                    url: { type: String, required: true, trim: true },
                },

                character5: {
                    nameEnglish: { type: String, required: true, trim: true },
                    nameTamil: { type: String, required: true, trim: true },
                    descriptionEnglish: { type: String, required: true, trim: true },
                    descriptionTamil: { type: String, required: true, trim: true },
                    url: { type: String, required: true, trim: true },
                },

                character6: {
                    nameEnglish: { type: String, required: true, trim: true },
                    nameTamil: { type: String, required: true, trim: true },
                    descriptionEnglish: { type: String, required: true, trim: true },
                    descriptionTamil: { type: String, required: true, trim: true },
                    url: { type: String, required: true, trim: true },
                },

                character7: {
                    nameEnglish: { type: String, required: true, trim: true },
                    nameTamil: { type: String, required: true, trim: true },
                    descriptionEnglish: { type: String, required: true, trim: true },
                    descriptionTamil: { type: String, required: true, trim: true },
                    url: { type: String, required: true, trim: true },
                },
            },
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Unit", unitSchema);