let router = require("express").Router();
let userController = require("../../controllers/userController");

router.get("/", userController.get);
router.post("/create", userController.create);
router.post("/:id/delete", userController.delete);
router.post("/:id/update", userController.update);
router.get("/:id", userController.show);

module.exports = router;
