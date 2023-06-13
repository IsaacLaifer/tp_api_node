const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Configuration de la base de données
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'tpnode',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database');
});

// Configuration de swagger

const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: 'Documentation de l\'API Films',
        version: '1.0.0',
      },
    },
    apis: ['server.js'], // Fichier principale
  };
  
  const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Configuration du body-parser pour récupérer les données JSON
app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.static(path.join(__dirname, 'public')));

/**
 * @swagger
 * /api/films:
 *   get:
 *     summary: Récupère la liste de tous les films
 *     responses:
 *       '200':
 *         description: Succès de la requête
 */

// Routes pour l'API
app.get('/api/films', (req, res) => {
  connection.query('SELECT * FROM films', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});


/**
 * @swagger
 * /api/films/{id}:
 *   get:
 *     summary: Récupère les détails d'un film spécifié par son ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID du film à récupérer
 *         required: true
 *         type: integer
 *     responses:
 *       '200':
 *         description: Succès de la requête
 */
app.get('/api/films/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM films WHERE id = ?', [id], (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

/**
 * @swagger
 * /api/films:
 *   post:
 *     summary: Crée un nouveau film
 *     parameters:
 *       - in: body
 *         name: film
 *         description: Informations sur le film à créer
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             titre:
 *               type: string
 *             realisateur:
 *               type: string
 *             annee:
 *               type: integer
 *     responses:
 *       '200':
 *         description: Succès de la requête
 */
app.post('/api/films', (req, res) => {
  const { titre, realisateur, annee } = req.body;
  const film = { titre, realisateur, annee };
  connection.query('INSERT INTO films SET ?', film, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});


/**
 * @swagger
 * /api/films/{id}:
 *   put:
 *     summary: Met à jour les détails d'un film spécifié par son ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID du film à mettre à jour
 *         required: true
 *         type: integer
 *       - in: body
 *         name: film
 *         description: Nouvelles informations sur le film
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             titre:
 *               type: string
 *             realisateur:
 *               type: string
 *             annee:
 *               type: integer
 *     responses:
 *       '200':
 *         description: Succès de la requête
 */
app.put('/api/films/:id', (req, res) => {
  const id = req.params.id;
  const { titre, realisateur, annee } = req.body;
  const film = { titre, realisateur, annee };
  connection.query('UPDATE films SET ? WHERE id = ?', [film, id], (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

/**
 * @swagger
 * /api/films/{id}:
 *   delete:
 *     summary: Supprime un film spécifié par son ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID du film à supprimer
 *         required: true
 *         type: integer
 *     responses:
 *       '200':
 *         description: Succès de la requête
 */
app.delete('/api/films/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM films WHERE id = ?', [id], (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
