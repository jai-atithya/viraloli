const User = require('../models/userModel');


// ===== USER DETAILS BY EMAIL =====
const getUserbyEmail = async (email) => {
    return await User.findOne({ email: { $eq: email } });
};

// ===== USER DETAILS BY USERNAME =====
const getUserbyUsername = async (username) => {
    return await User.findOne({ username: { $eq: username } });
};

module.exports = {
    getUserbyEmail,
    getUserbyUsername
};