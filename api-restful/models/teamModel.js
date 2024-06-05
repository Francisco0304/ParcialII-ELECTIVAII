// teamModel.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const teamSchema = new Schema({
  name: {
    type: String,
    required: true
},
position: {
    type: String,
    required: true
},
age: {
    type: Number,
    required: true
},
team: {
    type: Schema.Types.ObjectId,
    ref: 'team'

}
});

module.exports = mongoose.model('lugonzalezplayers', teamSchema);
