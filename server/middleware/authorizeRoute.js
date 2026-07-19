const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.type)) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to perform this action"
      });
    }
    next();
  };
};

module.exports = authorizeRoles;