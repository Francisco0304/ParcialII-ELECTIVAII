// teamRoutes.js
const express = require('express');
const router = express.Router();
const { getAllTeams, getTeamById, createTeam, updateTeam, deleteTeam } = require('./teamController');

router.get('/', getAllTeams);
router.get('/:id', getTeamById);
router.post('/', createTeam);
router.put('/:id', updateTeam); // Aquí es donde está ocurriendo el error
router.delete('/:id', deleteTeam);

module.exports = router;
