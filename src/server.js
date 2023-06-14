const dotenv = require('dotenv');
const express = require('express');
const path = require('path');

const filmRoute = require('./routes/films');
const docRoute = require('./routes/swagger.route');

dotenv.config();

const server = express();
server.use(express.json());
server.set('json spaces', 2);

// Spécifiez le chemin du dossier public
const publicPath = path.join(__dirname, 'public');
server.use(express.static(publicPath));

server.use('/api/v1/docs', docRoute);
server.use('/api/v1/films', filmRoute);

server.get('/', (req, res) => {
    // Renvoie le fichier index.html
    res.sendFile(path.join(publicPath, 'index.html'));
});

server.get('/films', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'films.html'));
});

server.get('/nouveaufilm', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'nouveaufilm.html'));
});

server.get('/deletefilm', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'deletefilm.html'));
});

server.get('/modifiefilm', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'modifiefilm.html'));
});

const port = Number(process.env.PORT || 8082);
server.listen(port, () => {
    console.log(`Your port is ${port}`);
});

module.exports = server;