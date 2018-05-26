let router = require("express").Router();
let genreController = require("../../../controllers/genreController");

router.get("/genres", genreController.get);
router.post("/genres/create", genreController.create);
router.delete("/genres/:id/delete", genreController.delete);
router.put("/genres/:id/update", genreController.update);
router.get("/genres/:id", genreController.show);

module.exports = router;
