const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listing.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });

router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn, 
    upload.single("listing[image]"),
    validateListing, 
    wrapAsync(listingController.createListing)
  );

router.get("/new", isLoggedIn, listingController.renderNewForm);  

router
  .route("/:id")  
  .get(wrapAsync(listingController.showListing))
  .put(
    isLoggedIn, 
    isOwner, 
    upload.single("listing[image]"),
    validateListing, 
    wrapAsync(listingController.updateListing)
  )
  .delete(
    isLoggedIn, 
    isOwner, 
    wrapAsync(listingController.destroyListing)
  );

router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm)); 

module.exports = router;






// //index route
// //show all listing
// router.get("/", wrapAsync(listingController.index));

// //CREATE
//   //add form
// router.get("/new", isLoggedIn, listingController.renderNewForm);

// //   //add new list
// // router.post("/listings", wrapAsync(async (req,res,next) => {
// //     // let {title,description,image,price,country,location} = req.body;
// //     if(!req.body.listing) {throw new ExpressError(400, "send valid data for listing");}
// //     const newListing = new Listing(req.body.listing);
// //     await newListing.save();
// //     res.redirect("/listings");
// // }));  

//   //add new list
//   router.post("/", isLoggedIn, validateListing, wrapAsync(listingController.createListing)); 

// //READ
// //show specific listing in detail
// router.get("/:id", wrapAsync(listingController.showListing));

// //UPDATE
//    //edit form
// router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));   

//   //edit listing = redirect to show specific listing page
// router.put("/:id", isLoggedIn, isOwner, validateListing, wrapAsync(listingController.updateListing));    

// //DELETE
// //delete listing
// router.delete("/:id", isLoggedIn, isOwner, wrapAsync(listingController.destroyListing)); 




// // remove common path = /listings = parent path