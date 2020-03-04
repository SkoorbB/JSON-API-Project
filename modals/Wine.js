const mongoose = require('../db/connection'); 
const Schema = mongoose.Schema

const Review = new Schema ({
    points: String,
    title: String,
    designation: String,
    variety: String,
    region_1: String,
    region_2: String,
    province: String,
    country: String,
    winery: String
})

module.exports = mongoose.model('Review', Review)