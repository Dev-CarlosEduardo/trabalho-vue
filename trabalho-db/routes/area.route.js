const express = require("express");
const area = require("../controllers/area.controller.js");

const router = express.Router();

router.post("/area", area.create);
router.get("/area", area.getAll);
router.get("/area/:id", area.getById);
router.put("/area/:id", area.alterById);
router.delete("/area/:id", area.deleteById);

module.exports = router;