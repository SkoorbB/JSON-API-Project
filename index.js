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

app.get("/description/:description", (req, res) => {
    Review.find(req.params.id).then(reviews => {
        res.json(reviews)
    });
});

// app.get("/description/:descriptionid", (req, res) => {
//     Review.find({description: req.params.id})
//     .then(reviews => {
//         res.json(reviews)
//     });
// });

// app.get("/points/:points", (req, res) => {
//     Review.find({points: req.params.points})
//     .then(reviews => {
//         res.json(reviews)
//     });
// });

app.post("/", (req, res) => {
    Review.create(req.body).then(reviews => {
        res.json(reviews);
    });
});

app.post('/:id/description', (req, res) => {
    List.findByIdAndUpdate(
      req.params.id,
      { $push: { description: req.body } },
      { new: true }
    ).then(reviews => {
      res.json(reviews)
    })
  })

app.listen(5000, () => {
    console.log('running 5000')
})