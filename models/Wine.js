const mongoose = require('../db/connection'); 
const Schema = mongoose.Schema

const Review = new Schema ({
    title: String,
    taster_twitter_handle: String,
    variety: String,
    review: [
        new Schema({
            description: String,
            points: String,
        })
    ],
    country: String,
    location: [
        new Schema({
            region_1: String,
            province: String
        })
    ],
    winery: String
});

module.exports = mongoose.model('Review', Review);