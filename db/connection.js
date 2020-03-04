const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/WineReview'), ({newUrlParser: true});

module.exports = mongoose;