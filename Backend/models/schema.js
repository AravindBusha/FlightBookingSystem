const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  
  password: {
    type: String,
    required: true
  },
  

});

module.exports = Schema = mongoose.model('name', Schema);