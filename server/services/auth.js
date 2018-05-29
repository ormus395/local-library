module.exports = {
  isAdmin: (req, res, next) => {
    if (req.user.role !== "Admin") {
      res.send("Not autherized");
    } else {
      return next();
    }
  },
  ensureAuth: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.send("You must be logged in to access this route");
    }
  }
};
