const User = require('../models/userModel');
const { generateAccessToken, generateRefreshToken } = require("../utils/generateToken");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

// ===== HASH PASSWORD =====
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// ===== SIGNUP USER =====
const signupUser = async ({ username, fullName, email, password, googleId }) => {
  const hashedPassword = await hashPassword(password);

  const userPayload = {
    username,
    fullName,
    email,
    password: hashedPassword,
    googleId
  };

  const user = await User.create(userPayload);
  return user;
};

module.exports = {
    signupUser,
};