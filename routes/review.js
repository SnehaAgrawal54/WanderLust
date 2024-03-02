const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");

const reviewController = require("../controllers/review.js");

//add review
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

//delete review
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview)); 

module.exports = router;



// remove common path = /listings/:id/reviews = parent path
//to join parent and child path => use {mergeParams: true}