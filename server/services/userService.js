const User = require('../models/userModel');


// ===== USER DETAILS BY EMAIL =====
const getUserbyEmail = async (email) => {
    return await User.findOne({ email: { $eq: email } });
};

// ===== USER DETAILS BY USERNAME =====
const getUserbyUsername = async (username) => {
    return await User.findOne({ username: { $eq: username } });

// ==== GET MY DATA ====
const getMyData = async (userId) => {
    const user = await UserCred.findById(userId, { password: 0, __v: 0, createdAt: 0, updatedAt: 0, googleId: 0 });
    return user;
};

module.exports = {
    getUserbyEmail,
    getUserbyUsername
    getMyData,
};