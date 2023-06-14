const router = require('express').Router();

const {
    getAllFilms,
    getFilmById,
    updateFilm,
    createFilm,
    deleteFilm
} = require('../controllers/film.controller');

/**
 * @swagger
 * /films:
 *   get:
 *     summary: Récupérer tous les films.
 *     responses:
 *       200:
 *         description: Succès de la requête avec les films récupérés.
 */
router.get('/', getAllFilms);

/**
 * @swagger
 * /films/{id}:
 *   get:
 *     summary: Récupérer un film par ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du film à récupérer.
 *     responses:
 *       200:
 *         description: Succès de la requête avec le film récupéré.
 *       404:
 *         description: Le film avec l'ID spécifié n'a pas été trouvé.
 */
router.get('/:id', getFilmById);

/**
 * @swagger
 * /films:
 *   post:
 *     summary: Créer un nouveau film.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Film'
 *     responses:
 *       200:
 *         description: Succès de la requête avec le film créé.
 *       400:
 *         description: Requête incorrecte, vérifiez les données fournies.
 */
router.post('/', createFilm);

/**
 * @swagger
 * /films/{id}:
 *   put:
 *     summary: Mettre à jour un film.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du film à mettre à jour.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Film'
 *     responses:
 *       200:
 *         description: Succès de la requête avec le film mis à jour.
 *       400:
 *         description: Requête incorrecte, vérifiez les données fournies.
 *       404:
 *         description: Le film avec l'ID spécifié n'a pas été trouvé.
 */
router.put('/:id', updateFilm);

/**
 * @swagger
 * /films/{id}:
 *   delete:
 *     summary: Supprimer un film.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du film à supprimer.
 *     responses:
 *       200:
 *         description: Succès de la requête avec le film supprimé.
 *       404:
 *         description: Le film avec l'ID spécifié n'a pas été trouvé.
 */
router.delete('/:id', deleteFilm);

module.exports = router;