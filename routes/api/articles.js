const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/saved
router.route("/saved")
	.get(articlesController.findAll)
	.post(articlesController.create)

// Matches with /api/saved/id
router.route("/saved/:id")
	.delete(articlesController.remove);

module.exports = router;
