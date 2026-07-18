const User = require('../models/userModel');


// ===== USER DETAILS BY EMAIL =====
const getUserbyEmail = async (email) => {
    return await User.findOne({ email: { $eq: email } });
};

module.exports = {
    getUserbyEmail,
};