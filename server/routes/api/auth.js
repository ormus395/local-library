let router = require("express").Router();
let authController = require("../../controllers/authController");
let passport = require("passport");

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/catalog",
    failureRedirect: "/"
  })
);

router.get("/current_user", (req, res) => {
  res.status(200).json(req.user);
});

router.get("/logout", authController.logout);

module.exports = router;
