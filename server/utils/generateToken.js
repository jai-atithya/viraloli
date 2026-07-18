const jwt = require('jsonwebtoken');
require('dotenv').config()
const crypto = require("crypto");


const generateAccessToken = (payload, res) => {
    return jwt.sign( payload , process.env.JWT_ACCESS_KEY, { expiresIn: '15d' });
}

const generateRefreshToken = (payload, res) => {
    return jwt.sign( payload , process.env.JWT_REFRESH_KEY, { expiresIn: '15d' });
}


module.exports = {
    generateAccessToken,
    generateRefreshToken,
};