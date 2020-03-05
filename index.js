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

app.get("/:id/review/:variety", (req, res) => {
    Review.findById(req.params.id, {review: req.params.variety})
    .then(reviews => {
        res.json(reviews)
    });
});

app.get("/:id/location/:location", (req, res) => {
    Review.findById(req.params.id, {location: req.params.location})
    .then(reviews => {
        res.json(reviews)
    });
});


// app.post("/", (req, res) => {
//     Review.create(req.body).then(reviews => {
//         res.json(reviews);
//     });
// });

// app.post('/:id/description', (req, res) => {
//     List.findByIdAndUpdate(
//       req.params.id,
//       { $push: { description: req.body } },
//       { new: true }
//     ).then(reviews => {
//       res.json(reviews)
//     })
//   })

app.listen(5000, () => {
    console.log('running 5000')
})