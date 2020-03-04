const Wine = require('../db/WineReview');
const Model = require('../models/Wine');


//want to fetch google maps api
//have it search for every winery present 

//have to stringify words 
//make the spaces with +
const make = Wine.map(item =>{


    const wine = {
        points: item.points,
        title: item.title,
        designation: item.designation,
        variety: item.variety,
        region_1: item.region_1,
        region_2: item.region_2,
        province: item.province,
        country: item.country,
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