const mongoose  = require('mongoose');
const Schema  = mongoose.Schema;

const userSchema = new Schema ({
  name: String,
  age: Number,
  place: String,
  // post: [postSchema];//Embedding
  posts: [{
    type: mongoose.Schema.Types.ObjecId,
    ref: "Post"
  }]
});

module.exports = mongoose.model('User', userSchema, userSchema);
