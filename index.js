const express = require('express');
const app = express();
const parser = require('body-parser');
const Review = require('./models/Wine'); 

app.use(parser.json());

app.get("/", (req, res) => {
    Review.find({}).then(reviews =>{
        res.json(reviews)
    });
});

app.get("/:id", (req, res) => {
    Review.findById(req.params.id).then(reviews => {
        res.json(reviews)
    });
});

app.get("/country/:country", (req, res) => {
    Review.find({country: req.params.country})
    .then(reviews => {
        res.json(reviews)
    });
});

app.get("/points/:points", (req, res) => {
    Review.find({points: req.params.points})
    .then(reviews => {
        res.json(reviews)
    });
});

app.listen(5000, () => {
    console.log('running 5000')
})