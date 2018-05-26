let express = require("express"); // Always hate this format
let router = express.Router(); // Creates router object, much like express app object, but just routing
let users = require("./api/users");
let { genres, books, authors, bookInstance } = require("./api/catalog");

router.use("/users", users);
router.use("/catalog", [genres, books, authors, bookInstance]);

module.exports = router;
