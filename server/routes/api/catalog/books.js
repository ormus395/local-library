let router = require("express").Router();
let bookController = require("../../../controllers/bookController");

router.get("/books", bookController.get); // Get books, paginates by req.query, query is page
router.post("/books/create", bookController.create);
router.get("/books/search", bookController.handleSearch);
router.post("/books/:id/delete", bookController.delete);
router.post("/books/:id/update", bookController.update);
router.get("/books/:id", bookController.show);

module.exports = router;
