const User = require('../models/userModel');
const { generateGoogleTempToken, generateAccessToken, generateRefreshToken } = require("../utils/generateToken");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

// ===== HASH PASSWORD =====
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// ===== SIGNUP USER =====
const signupUser = async ({ username, fullName, email, password, googleId }, ip, userAgent) => {
  const hashedPassword = await hashPassword(password);

  const userPayload = {
    username,
    fullName,
    email,
    password: hashedPassword,
    googleId
  };

  const user = await User.create(userPayload);
  const accessToken = generateAccessToken({ userId: user._id });
  const refreshToken = generateRefreshToken({ userId: user._id, ip, userAgent });
  return { user, accessToken, refreshToken };
};

// ===== VERIFY PASSWORD =====
const verifyPassword = async (plain, hashed) => {
  return await bcrypt.compare(plain, hashed);
};

// ===== LOGIN USER =====
const loginUser = async ({ email, password }, ip, userAgent) => {
  const user = await User.findOne({ email });
  if (!user) throw Object.assign(new Error("Invalid credentials"), { statusCode: 401 });

  const isValid = await verifyPassword(password, user.password);
  if (!isValid) throw Object.assign(new Error("Invalid credentials"), { statusCode: 401 });

  const accessToken = generateAccessToken({ userId: user._id });
  const refreshToken = generateRefreshToken({ userId: user._id, ip, userAgent });

  return { user, accessToken, refreshToken };
};

// ==== REFRESH ACCESS TOKEN ===
const refreshAccessToken = async(
  refreshToken, ip, userAgent
)=>{
  const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY);
  if(decoded.ip!==ip && decoded.userAgent!==userAgent){
    throw Object.assign(new Error("Token IP and UserAgent mismatch"), { statusCode: 401 });
  }
  const accessToken = generateAccessToken({ userId: decoded.userId });
  return accessToken;
};

// ==== GOOGLE LOGIN ===
const googleLoginUser=async({googleId, email}, ip, userAgent, res)=>{
  const user=await User.findOne({email});
  if(!user){
    throw Object.assign(new Error("User not found"), { statusCode: 404 });
  }
  if (user.googleId !== googleId) {
    return res.redirect(
      `${process.env.FRONTEND_URL}/auth?error=GOOGLE_ACCOUNT_MISMATCH`
    );              
  }

  const accessToken = generateAccessToken({ userId: user._id });
  const refreshToken = generateRefreshToken({ userId: user._id, ip, userAgent });

  return { user, accessToken, refreshToken };
}

// ==== TEMP GOOGLE TOKEN ====
const generateTempGoogleToken = ({ email, googleId, fullName}) => {
  const payload = { email, googleId, fullName};
  const tempToken = generateGoogleTempToken(payload);
  return tempToken;
};

// ==== VERIFY GOOGLE TOKEN ====
const verifyTempGoogleToken = (tempToken) => {
  const payload = jwt.verify(tempToken, process.env.JWT_GOOGLE_KEY);
  return payload;
}


module.exports = {
    signupUser,
    loginUser,
    refreshAccessToken,
    googleLoginUser,
    generateTempGoogleToken,
    verifyTempGoogleToken
};