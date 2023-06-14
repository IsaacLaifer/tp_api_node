const dataBase = require('../db/db-connect');

const Film = function(film) {
  this.titre = film.titre;
  this.realisateur = film.realisateur;
  this.annee = film.annee;
};

Film.getAllFilms = result => {
  dataBase.query('SELECT * FROM films', (error, response) => {
    if (error) {
      result(error, null);
    } else {
      result(null, response);
    }
  });
};

Film.getFilmById = (id, result) => {
  dataBase.query('SELECT * FROM films WHERE id = ?', id, (error, response) => {
    if (error) {
      result(error, null);
    } else {
      result(null, response);
    }
  });
};

Film.createFilm = (newFilm, result) => {
  const { titre, realisateur, annee } = newFilm;
  const query = 'INSERT INTO films (titre, realisateur, annee) VALUES (?, ?, ?)';
  dataBase.query(query, [titre, realisateur, annee], (error, response) => {
    if (error) {
      result(error, null);
    } else {
      result(null, response.insertId);
    }
  });
};

Film.updateFilm = (id, updatedFilm, result) => {
  const { titre, realisateur, annee } = updatedFilm;
  const query = 'UPDATE films SET titre = ?, realisateur = ?, annee = ? WHERE id = ?';
  dataBase.query(query, [titre, realisateur, annee, id], (error, response) => {
    if (error) {
      result(error, null);
    } else {
      result(null, response.affectedRows);
    }
  });
};

Film.deleteFilm = (id, result) => {
  dataBase.query('DELETE FROM films WHERE id = ?', id, (error, response) => {
    if (error) {
      result(error, null);
    } else {
      result(null, response.affectedRows);
    }
  });
};

module.exports = Film;