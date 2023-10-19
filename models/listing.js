const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.38ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnww",
        set: (v) => v === "" ? "images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.38ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnww" : v,
    },
    price: Number,
    location: String,
    Country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        }
    ]
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;