const mongoose = require('../db/connection'); 
const Schema = mongoose.Schema

const Location = new Schema ({
    country: String,
    region_1: String,
    province: String
});

const Description = new Schema ({
    variety: String,
    description: String,
    points: String,
});

const Review = new Schema ({
    title: String,
    taster_twitter_handle: String,
    description: [{Description}],
    location: [{Location}],
    winery: String
});

module.exports = mongoose.model('Review', Review);