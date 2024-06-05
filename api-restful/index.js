const express = require('express');
const APIController = require('./controllers/APIController');

const app = express();
const PORT = process.env.PORT || 3000;

const apiController = new APIController();

app.use(express.json());

// Rutas
app.get('/api/teams', apiController.getAllTeams);
app.get('/api/teams/:id', apiController.getTeamById);
app.post('/api/players', apiController.addPlayer);
app.get('/api/players', apiController.getAllPlayers);
app.put('/api/players/:id', apiController.updatePlayer);
app.delete('/api/players/:id', apiController.deletePlayer);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
