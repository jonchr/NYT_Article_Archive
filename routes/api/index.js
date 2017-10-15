const router = require("express").Router();
const articleRoutes = require("./articles");

// Book routes
router.use("", articleRoutes);

module.exports = router;
