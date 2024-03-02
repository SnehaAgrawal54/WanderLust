const Listing = require("./models/listing.js");
const Review = require("./models/review.js");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema, reviewSchema} = require("./schema.js");


module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in!");
        return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req,res,next) => {
  let {id, reviewId} = req.params;
  if(req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
    console.log("----------redirectUrl--------");
    console.log(res.locals.redirectUrl);
    // if(req.session.redirectUrl.includes(`/listings/${id}/reviews/${reviewId}?_method=DELETE`)){res.locals.redirectUrl = `/listings/${id}`}
  }
  next();
};

module.exports.isOwner = async (req,res,next) => {
  let {id} = req.params;
  let listing = await Listing.findById(id);
  if(!listing.owner.equals(res.locals.currUser._id)) {
    req.flash("error", "You are not the owner of this listing");
    return res.redirect(`/listings/${id}`);
  }
  next();
};

module.exports.validateListing = (req,res,next) => {
  let {error} = listingSchema.validate(req.body);
  if(error){
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  }
  else{next();}
};

module.exports.validateReview = (req,res,next) => {
  let {error} = reviewSchema.validate(req.body);
  if(error){
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  }
  else{next();}
};

module.exports.isReviewAuthor = async (req,res,next) => {
  let {id, reviewId} = req.params;
  let review = await Review.findById(reviewId);
  if(!review.author.equals(res.locals.currUser._id)) {
    req.flash("error", "You are not the author of this review");
    return res.redirect(`/listings/${id}`);
  }
  next();
};




//to show signup and login in navbar if user is not log in and vice versa
  //req.user = show undefined         (if user is not logged in)
  //req.user = show obj of user info  (if user is logged in)
  //store req.user in res.locals, as we can't access it directly in ejs file

//to redirect to same page we are trying to use, when we are not logged in, after login
  //req.path        = show path (/new)
  //req.originalUrl = show url (/listings/new)
  //save req.originalUrl in req.session (as every route,middleware have access of req.session) if user is not logged in
  //when login passport reset req.session =>so save this in res.locals