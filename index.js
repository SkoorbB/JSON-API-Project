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

app.get("/country/:country", (req, res) => {
    Review.find({country: req.params.country}).then(reviews =>{
        res.json(reviews)
    });
});

app.get("/variety/:variety", (req, res) => {
    Review.find({variety: req.params.variety}).then(reviews =>{
        res.json(reviews)
    });
});

app.get("/:id", (req, res) => {
    Review.findById(req.params.id).then(reviews => {
        res.json(reviews)
    });
});

app.get("/:id/review/:description", (req, res) => {
    Review.findById(req.params.id, {review: req.params.description})
    .then(reviews => {
        res.json(reviews)
    });
});

app.get("/:id/:location/", (req, res) => {
    Review.findById(req.params.id, {location: req.params.location})
    .then(reviews => {
        res.json(reviews)
    });
});

app.post("/", (req, res) => {
    Review.create(req.body)
    .then(reviews => {
        res.json(reviews)
    });
});

app.listen(5000, () => {
    console.log('running 5000')
})