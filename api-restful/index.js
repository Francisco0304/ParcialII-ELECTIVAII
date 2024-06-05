// server.js
const express = require('express');
const db = require('./drivers/connect-db');
const teamRoutes = require('./controllers/teamRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/teams', teamRoutes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
