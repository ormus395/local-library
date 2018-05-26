let router = require("express").Router();
let authorController = require("../../../controllers/authorController");

router.get("/authors", authorController.get);
router.post("/authors/create", authorController.create);
router.post("/authors/:id/delete", authorController.delete);
router.post("/authors/:id/update", authorController.update);
router.get("/authors/:id", authorController.show);

module.exports = router;
