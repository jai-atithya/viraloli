const mongoose = require("mongoose");

const unitSchema = new mongoose.Schema(
    {
        unitId: {
            type: Number,
            required: true,
            unique: true,
        },

        unitNumber:{
            type: Number,
            required:true,
            unique:true,
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

        logo: {
            type:
            {
                url: { type: String, required: true },
                key: { type: String, required: true }
            },
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Unit", unitSchema);