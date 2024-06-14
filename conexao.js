const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect('mongodb://localhost:27017/livraria', options)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection error', err));

module.exports = mongoose;
