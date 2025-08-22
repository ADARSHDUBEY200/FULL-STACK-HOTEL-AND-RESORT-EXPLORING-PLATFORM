const Listing = require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });



module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    return res.render("listings/index.ejs", { allListings })

}

module.exports.renderNewForm = (req, res) => {
    return res.render("listings/new.ejs");
}

module.exports.showListing = async (req, res) => {
    let { id } = req.params;

    const listing = await Listing.findById(id).populate({ path: "reviews", populate: { path: "author" } }).populate("owner");

    if (!listing) {
        req.flash("error", "Listing you requested which is not exist!");
        return res.redirect("/listings");
    }
    // console.log(listing);
    return res.render("listings/show", { listing });
}

module.exports.createListing = async (req, res, next) => {

    let response = await geocodingClient
        .forwardGeocode({
            query: req.body.listing.location,
            limit: 1,
        })
        .send();

    let url = req.file.path;
    let filename = req.file.filename;

    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename }
    newListing.geometry = response.body.features[0].geometry;
    let savedListing = await newListing.save();
    // console.log(savedListing);

    req.flash("success", "New listing created");
    return res.redirect("/listings");
    // console.log(listing);
}


module.exports.editListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing you requested which is not exist!");
        return res.redirect("/listings");
    }

    // let originalImageUrl=listing.image.url;
    // console.log(originalImageUrl);
    // originalImageUrl=originalImageUrl.replace("/upload","/upload/h_300,w_250");
    // console.log(originalImageUrl);
    return res.render("listings/edit.ejs", { listing });

}

module.exports.updateListing = async (req, res) => {

    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    if (!listing) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listings"); 
    };

    if (typeof req.file !== "undefined") {

        let filename = req.file.filename;
        let url = req.file.path;
        listing.image = { url, filename };
        await listing.save();
    }


    req.flash("success", "listing updated");
    return res.redirect(`/listings/${id}`);


}

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);

    if (!deletedListing) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listings");
    };

    req.flash("success", "listing deleted");
    // console.log(deletedListing);

    return res.redirect("/listings");

}