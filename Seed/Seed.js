const Wine = require('../db/WineReview');
const Model = require('../models/Wine');


//want to fetch google maps api
//have it search for every winery present 

//have to stringify words 
//make the spaces with +
const make = Wine.map(item =>{
    const wine = {
        title: item.title,
        taster_twitter_handle: item.taster_twitter_handle,
        variety: item.variety,
        review: {
            description: item.description,
            points: item.points,
        },
        country: item.country,
        location: {
            region_1: item.region_1,
            province: item.province,
        },
        winery: item.winery
    };
    return wine
});

Model.deleteMany({})
    .then(() => {
        Model.create(make)
        .then(wines => {
            console.log(wines)
    });
});