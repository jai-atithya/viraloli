const mongoose = require("mongoose");

const wordSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },

        unlockLesson: {
            type: Number,
            required: true,
        },

        keyMap: [
            {
                text: {
                    type: String,
                    required: true,
                },
                keys: [
                    {
                        code: {
                            type: String,
                            required: true,
                        },
                        altKey: {
                            type: Boolean,
                            default: false,
                        },
                        ctrlKey: {
                            type: Boolean,
                            default: false,
                        },
                        shiftKey: {
                            type: Boolean,
                            default: false,
                        },
                        metaKey: {
                            type: Boolean,
                            default: false,
                        },
                    },
                ],
            },
        ],
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Words", wordSchema);