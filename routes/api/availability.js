const router = require("express").Router();
const listingController = require("../../controllers/listingController");

router
    .route("/")
    .get(listingController.findAllAvailable);
router
    .route("/")
    .post(listingController.createAvailability);

router.route("/")
    .put(listingController.updateAvailabilityUser);

router
    .route("/:id")
    .get(listingController.getAvailabilityByListingId);
router
    .route("/:id")
    .delete(listingController.deleteAvailability);

module.exports = router;