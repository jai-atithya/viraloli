const asyncHandler = require("express-async-handler");
const userService = require("../services/userService");
const bloomService = require("../services/bloomService");

// @Desc Check username availability
// @Route GET /api/user/check-username/:username
const checkUsername = asyncHandler(async (req, res) => {
  const { username } = req.params;
  const mightExist = await bloomService.checkUsername(username);

  if (!mightExist) {
    return res.status(200).json({
      success: true,
      available: true,
      message: "Username available"
    });
  }

  const user = await userService.getUserbyUsername(username);

  if (user) {
    return res.status(200).json({
      success: true,
      available: false,
      message: "Username already taken"
    });
  }

  return res.status(200).json({
    success: true,
    available: true,
    message: "Username available"
  });
});

module.exports = {
  checkUsername
};