const mongoose = require('../db/connection'); 
const Schema = mongoose.Schema

const Review = new Schema ({
    title: String,
    taster_twitter_handle: String,
    review: {
            variety: String,
            description: String,
            points: String,
        },
    location: {
            country: String,
            region_1: String,
            province: String
        },
    winery: String
});

module.exports = mongoose.model('Review', Review);