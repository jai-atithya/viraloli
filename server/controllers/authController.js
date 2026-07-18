const asyncHandler = require("express-async-handler");
const authService = require("../services/authService");
const userService = require("../services/userService");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// @Desc Signup user
// @Route POST /api/auth/signup
const signup = asyncHandler(async (req, res) => {
    
    const { username, fullName, email, password, googleId } = req.body || {};

    if (!username || !fullName || !email || !password || !googleId) {
      throw Object.assign(
        new Error("Required Fields are missing!"),
        {
          statusCode: 400,
        }
      );
    }


  const existingUser = await userService.getUserbyEmail(email);
  if (existingUser) {
    throw Object.assign(new Error("This email is already registered"), {
      statusCode: 400,
    });
  }
  const signupPayload = {
    username,
    fullName,
    email,
    password,
    googleId
  };

  if (googleId) {
    signupPayload.googleId = googleId;
  }

  const user = await authService.signupUser(signupPayload);
  if (!user) {
    throw Object.assign(new Error("Error creating user details"), {
      statusCode: 500,
    });
  }

  res.status(201).json({
    success: true,
    data: { userId: user._id, message: "Signup successful" },
  });
});



module.exports = {
  signup,
};