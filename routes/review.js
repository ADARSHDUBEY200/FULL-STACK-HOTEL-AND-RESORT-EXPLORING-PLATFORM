const express=require("express");
const router=express.Router({mergeParams:true});
const{reviewSchema}=require("../schema.js");
const Review=require("../models/review.js");
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const Listing=require("../models/listing.js");
const {isLoggedIn,isOwner,validateReview,isReviewAuthor}=require("../middleware.js");
const reviewController=require("../controllers/review.js");




 
//POST ROUTE 

router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.postReview));


//DELETE ROUTE

router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview));


module.exports=router;