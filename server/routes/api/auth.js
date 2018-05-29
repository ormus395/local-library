let router = require("express").Router();
let authController = require("../../controllers/authController");
let passport = require("passport");

router.post("/login", passport.authenticate("local"), authController.login);
router.get("/logout", authController.logout);

module.exports = router;
