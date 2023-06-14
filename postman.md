### Récupérer tous les films

- Endpoint: `GET /api/v1/films`

### Récupérer un film par ID

- Endpoint: `GET /api/v1/films/{id}`
- Exemple: `GET /api/v1/films/1`

### Créer un nouveau film

- Endpoint: `POST /api/v1/films`
- Body (JSON):
  ```json
  {
    "titre": "Titre du film",
    "realisateur": "Nom du réalisateur",
    "annee": 2023
  }
  ```

### Mettre à jour un film

- Endpoint: `PUT /api/v1/films/{id}`
- Exemple: `PUT /api/v1/films/1`
- Body (JSON):
  ```json
  {
    "titre": "Nouveau titre",
    "realisateur": "Nouveau réalisateur",
    "annee": 2022
  }
  ```

### Supprimer un film

- Endpoint: `DELETE /api/v1/films/{id}`
- Exemple: `DELETE /api/v1/films/1`

Veuillez noter que vous devez remplacer `{id}` par l'ID réel du film dans les requêtes où cela est indiqué.