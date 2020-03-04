const mongoose = require('../db/connection'); 
const Schema = mongoose.Schema

const Location = new Schema ({
    country: String,
    region_1: String,
    province: String
});

const Review = new Schema ({
    location: [{Location}],
    points: String,
    title: String,
    description: String,
    taster_twitter_handle: String,
    variety: String,
    winery: String
});

module.exports = mongoose.model('Review', Review);