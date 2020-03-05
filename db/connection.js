const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/WineReview'), ({newUrlParser: true});
let mongoURI = "";

if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/WineReview";
  }

  mongoose.connect(mongoURI, {useNewUrlParser: true})
  .then(instance => {
      console.log(`Connected to dB: ${instance.connection[0].name}`)
  }).catch(error => console.log('Connection failed', error));

module.exports = mongoose;