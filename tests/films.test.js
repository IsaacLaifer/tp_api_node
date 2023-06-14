const assert = require('assert');
const filmModel = require('../src/models/film.model.js');

describe('Film', () => {
  describe('#createFilm', () => {
    it('should create a new film', () => {
      const nouveauFilm = {
        titre: 'Titre du film',
        realisateur: 'Nom du réalisateur',
        annee: 2023
      };

      filmModel.createFilm(nouveauFilm, (error, filmId) => {
        assert.strictEqual(error, null);
        assert.strictEqual(typeof filmId, 'number');
      });
    });
  });

  describe('#getFilmById', () => {
    it('should get a film by ID', () => {
      const filmId = 1;

      filmModel.getFilmById(filmId, (error, film) => {
        assert.strictEqual(error, null);
        assert.strictEqual(film.length, 1);
        assert.strictEqual(film[0].id, filmId);
      });
    });
  });

  describe('#updateFilm', () => {
    it('should update an existing film', () => {
      const filmId = 1;
      const updatedFilm = {
        titre: 'Nouveau titre',
        realisateur: 'Nouveau réalisateur',
        annee: 2024
      };

      filmModel.updateFilm(filmId, updatedFilm, (error, rowsAffected) => {
        assert.strictEqual(error, null);
        assert.strictEqual(rowsAffected, 1);
      });
    });
  });

  describe('#deleteFilm', () => {
    it('should delete an existing film', () => {
      const filmId = 1;

      filmModel.deleteFilm(filmId, (error, rowsAffected) => {
        assert.strictEqual(error, null);
        assert.strictEqual(rowsAffected, 1);
      });
    });
  });
});