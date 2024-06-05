const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jairouptc:nyxmeR-zusjoz-8zubda@cluster0.9lfyrk5.mongodb.net/test');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Conexión exitosa a la base de datos.');
});

module.exports = db;
