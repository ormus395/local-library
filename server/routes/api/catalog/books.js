let router = require("express").Router();
let bookController = require("../../../controllers/bookController");

router.get("/books", bookController.get);
router.post("/books/create", bookController.create);
router.post("/books/:id/delete", bookController.delete);
router.post("/books/:id/update", bookController.update);
router.get("/books/:id", bookController.show);

module.exports = router;
