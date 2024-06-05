// teamController.js
const Team = require('./../models/teamModel');

async function getAllTeams(req, res) {
  try {
    const teams = await Team.find();
    res.json(teams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getTeamById(req, res) {
  try {
    const team = await Team.findById(req.params.id);
    res.json(team);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createTeam(req, res) {
  try {
    const { name, year, titles, city } = req.body;
    const newTeam = new Team({ name, year, titles, city });
    await newTeam.save();
    res.status(201).json(newTeam);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateTeam(req, res) {
  try {
    const { id } = req.params;
    const { name, year, titles, city } = req.body;
    const updatedTeam = await Team.findByIdAndUpdate(id, { name, year, titles, city }, { new: true });
    res.json(updatedTeam);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteTeam(req, res) {
  try {
    const { id } = req.params;
    await Team.findByIdAndDelete(id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllTeams,
  getTeamById,
  createTeam,
  updateTeam,
  deleteTeam,
};
