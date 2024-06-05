// teamModel.js
const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: String,
  year: Number,
  titles: Number,
  city: String,
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
