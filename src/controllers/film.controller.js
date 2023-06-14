const filmModel = require('../models/film.model');

const getAllFilms = (req, res) => {
  filmModel.getAllFilms((error, data) => {
    if (error) {
      res.status(500).send({
        message: error.message || "Une erreur est survenue en essayant de récupérer les films"
      });
    } else {
      res.send(data);
    }
  });
};

const getFilmById = (req, res) => {
  const filmId = req.params.id;

  filmModel.getFilmById(filmId, (error, film) => {
    if (error) {
      res.status(500).send({
        message: error.message || "Une erreur est survenue en essayant de récupérer le film"
      });
    } else {
      if (film.length > 0) {
        res.send(film[0]);
      } else {
        res.status(404).send({
          message: "Film non trouvé"
        });
      }
    }
  });
};

const updateFilm = (req, res) => {
  const filmId = req.params.id;
  const nouveauFilm = {
    titre: req.body.titre,
    realisateur: req.body.realisateur,
    annee: req.body.annee,
  };

  filmModel.updateFilm(filmId, nouveauFilm, (error, rowsAffected) => {
    if (error) {
      res.status(500).send({
        message: error.message || "Une erreur est survenue lors de la mise à jour du film"
      });
    } else {
      if (rowsAffected > 0) {
        res.send({ id: filmId, ...nouveauFilm });
      } else {
        res.status(404).send({
          message: "Film non trouvé"
        });
      }
    }
  });
};

const createFilm = (req, res) => {
  const nouveauFilm = {
    titre: req.body.titre,
    realisateur: req.body.realisateur,
    annee: req.body.annee
  };

  filmModel.createFilm(nouveauFilm, (error, filmId) => {
    if (error) {
      res.status(500).send({
        message: error.message || "Une erreur est survenue lors de la création du film"
      });
    } else {
      res.send({ id: filmId, ...nouveauFilm });
    }
  });
};

const deleteFilm = (req, res) => {
  const filmId = req.params.id;

  filmModel.deleteFilm(filmId, (error, rowsAffected) => {
    if (error) {
      res.status(500).send({
        message: error.message || "Une erreur est survenue lors de la suppression du film"
      });
    } else {
      if (rowsAffected > 0) {
        res.send({ message: "Film supprimé avec succès" });
      } else {
        res.status(404).send({
          message: "Film non trouvé"
        });
      }
    }
  });
};

module.exports = {
  getAllFilms,
  getFilmById,
  updateFilm,
  createFilm,
  deleteFilm
};
