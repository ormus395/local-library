let router = require("express").Router();
let bookIntanceController = require("../../../controllers/bookinstanceController");

router.get("/book_instance", bookIntanceController.get);
router.post("/book_instance/create", bookIntanceController.create);
router.post("/book_instance/:id/delete", bookIntanceController.delete);
router.post("/book_instance/:id/update", bookIntanceController.update);
router.get("/book_instance/:id", bookIntanceController.show);

module.exports = router;
