const asyncHandler = require("express-async-handler");
const authService = require("../services/authService");
const userService = require("../services/userService");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// @Desc Signup user
// @Route POST /api/auth/signup
const signup = asyncHandler(async (req, res) => {

    const { username, fullName, email, password, googleId } = req.body || {};
    const ip = req.ip;
    const userAgent = req.headers["user-agent"];

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

    const { user, accessToken, refreshToken } = await authService.signupUser(signupPayload, ip, userAgent);
    if (!user) {
        throw Object.assign(new Error("Error creating user details"), {
            statusCode: 500,
        });
    }
    res.cookie("access_token", accessToken, {
        httpOnly: true,
        // maxAge: 60 * 1000,
        maxAge: 15 * 24 * 60 * 60 * 1000, //15 days development
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development",
    });

    res.cookie("refresh_token", refreshToken, {
        httpOnly: true,
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development",
    });

    res.status(201).json({
        success: true,
        data: { userId: user._id, message: "Signup successful" },
    });
});

// @Desc Login user
// @Route POST /api/auth/login
const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body || {};
    const ip = req.ip;
    const userAgent = req.headers["user-agent"];

    if (!email || !password) {
        throw Object.assign(new Error("Email and password are required"), {
            statusCode: 400,
        });
    }

    const { user, accessToken, refreshToken } = await authService.loginUser(
        { email, password },
        ip,
        userAgent
    );

    if (!accessToken || !refreshToken) {
        throw Object.assign(new Error("Error logging in user. Try Again!"), {
            statusCode: 500,
        });
    }
    res.cookie("access_token", accessToken, {
        httpOnly: true,
        // maxAge: 60 * 1000,
        maxAge: 15 * 24 * 60 * 60 * 1000, //15 days development
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development",
    });

    res.cookie("refresh_token", refreshToken, {
        httpOnly: true,
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development",
    });

    res.status(200).json({
        success: true,
        data: { userId: user._id, message: "Login successful" },
    });
});

// @Desc Refresh access token
// @Route POST /api/auth/refresh-token
const refreshToken = asyncHandler(async (req, res) => {
  const refreshToken = req.cookies.refresh_token;
  if (!refreshToken) {
    throw Object.assign(new Error("Refresh token missing"), {
      statusCode: 401,
    });
  }

  const ip = req.ip;
  const userAgent = req.headers["user-agent"];

  const accessToken = await authService.refreshAccessToken(
    refreshToken,
    ip,
    userAgent
  );

  res.cookie("access_token", accessToken, {
    httpOnly: true,
    // maxAge: 60 * 1000,
    maxAge: 15 * 24 * 60 * 60 * 1000, //15 days development
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  });

  res.status(200).json({
    success: true,
    accessToken,
  });
});

module.exports = {
    signup,
    login,
    refreshToken,
};