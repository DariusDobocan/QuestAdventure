const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  username: String,
  thumbnail: String,
  badge: {type: String, default: 'Apperentice'},
  credits: { type: Number, default: 10 }
});

mongoose.model('users', userSchema);

