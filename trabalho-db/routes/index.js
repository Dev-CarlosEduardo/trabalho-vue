const express = require("express");
const router = express.Router();

router.use(require("./area.route.js"));

module.exports = router;