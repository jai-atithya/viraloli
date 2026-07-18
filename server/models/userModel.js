const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            lowercase: true,
            trim: true,
            unique: true,
            required: true,
            index: true,
        },
        fullName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            lowercase: true,
            trim: true,
            unique: true,
            required: true,
            index: true,
        },
        password: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            enum: ["user", "admin",],
            default: "user",
            required: true,
        },
        googleId: {
            type: String,
            unique: true,
            sparse: true,
            trim: true,
            index: true,
        },
        profilePic: {
            type:
            {
                url: { type: String, required: true },
                key: { type: String, required: true }
            },
            // default: {
            //   url: "/uploads/userPhotos/be691394-1856-4a17-85ee-b7dd9fbc4679.webp",
            //   key: "userPhotos/be691394-1856-4a17-85ee-b7dd9fbc4679.webp"
            // },
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Users", userSchema);