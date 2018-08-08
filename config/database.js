const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost:2018/pracRest', {useNewUrlParser: true}, function(err){
  if(err){
    throw err;
  }
  console.log('Connected to the database');
});
