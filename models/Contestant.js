const mongoose = require('mongoose');
const { Schema } = mongoose;

const contestantSchema = new Schema ({
    image: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
});

mongoose.model('contestants', contestantSchema);