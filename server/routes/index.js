let express = require("express"); // Always hate this format
let router = express.Router(); // Creates router object, much like express app object, but just routing
let usersRoute = require("./api/users");
let { genres, books, authors, bookInstance } = require("./api/catalog");
let authRoute = require("./api/auth");
let authService = require("../services/auth");

router.param("search", (req, res, next) => {
  console.log("ppop");
});
router.get("/catalog/:search", (req, res, next) => {
  console.log("pee");
});
// All post requests to catalog/whatever must be authenticated and authorized
router.post("/catalog/*", authService.ensureAuth, authService.isAdmin); // Doing it this way allows layer level middleware to an entire subset of resources, seems very hacky right now, will dig deeper to see if there is a better way
router.use("/catalog", [genres, books, authors, bookInstance]);
router.use("/users", usersRoute);
router.use("/auth", authRoute);
module.exports = router;
