const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Conexión a la base de datos
const URI = "mongodb://localhost:27017/projects";

mongoose.connect(URI)
  .then(() => console.log('Conexión exitosa a la base de datos...'))
  .catch(err => console.error('Error al conectar a la base de datos:', err));

// Definir el esquema para los equipos
const teamSchema = new mongoose.Schema({
    name: String,
    year: Number,
    titles: Number,
    city: String
});

// Definir el modelo para los equipos
const Team = mongoose.model('Team', teamSchema);

// Definir el esquema para los jugadores
const playerSchema = new mongoose.Schema({
    name: String,
    position: String,
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    }
});

// Definir el modelo para los jugadores
const Player = mongoose.model('Player', playerSchema);

class APIController {
    async getAllTeams(req, res) {
        try {
            const teams = await Team.find();
            res.json(teams);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getTeamById(req, res) {
        try {
            const team = await Team.findById(req.params.id);
            if (team === null) {
                return res.status(404).json({ message: "Equipo no encontrado" });
            }
            res.json(team);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async addPlayer(req, res) {
        const player = new Player({
            name: req.body.name,
            position: req.body.position,
            team: req.body.team
        });

        try {
            const newPlayer = await player.save();
            res.status(201).json(newPlayer);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getAllPlayers(req, res) {
        try {
            const players = await Player.find();
            res.json(players);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updatePlayer(req, res) {
        try {
            const player = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (player === null) {
                return res.status(404).json({ message: "Jugador no encontrado" });
            }
            res.json(player);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deletePlayer(req, res) {
        try {
            const player = await Player.findByIdAndDelete(req.params.id);
            if (player === null) {
                return res.status(404).json({ message: "Jugador no encontrado" });
            }
            res.json({ message: "Jugador eliminado correctamente" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = APIController;
