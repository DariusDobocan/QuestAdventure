const mongoose = require('mongoose');
const { Schema } = mongoose;
const ContestantSchema = require("./Contestant");

const questSchema = new Schema ({
  title: String,
  subject: String,
  body: String,
  contestants: [ContestantSchema],
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
});

mongoose.model('quests', questSchema);
