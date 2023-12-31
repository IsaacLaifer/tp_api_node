# Projet de gestion de films

Ce projet est une API de gestion de films développée en utilisant Node.js et MySQL. Elle permet de créer, lire, mettre à jour et supprimer des films.

## Installation

1. Clonez ce repository sur votre machine locale.
2. Assurez-vous d'avoir Node.js et MySQL installés sur votre machine.
3. Importez la base de données fournie dans le dossier `db` dans votre système de gestion de base de données MySQL.
4. Dans le répertoire du projet, exécutez la commande suivante pour installer les dépendances :

```shell
npm install
```

5. Configurez les informations de connexion à la base de données dans le fichier `src/db/db-connect.js`.

## Utilisation

1. Pour démarrer le serveur, exécutez la commande suivante :

```shell
node .\src\server.js
```

2. L'API sera disponible à l'adresse `http://localhost:8082`.

## Endpoints

L'API expose les endpoints suivants pour la gestion des films :

- `GET /films` : Récupère la liste de tous les films.
- `GET /films/:id` : Récupère un film par son ID.
- `POST /films` : Crée un nouveau film.
- `PUT /films/:id` : Met à jour les informations d'un film existant.
- `DELETE /films/:id` : Supprime un film existant.

Assurez-vous d'inclure les détails nécessaires tels que les paramètres, les corps de requête et les réponses attendues pour chaque endpoint.

## Tests

Des tests unitaires ont été écrits en utilisant Mocha. Pour exécuter les tests, exécutez la commande suivante :

```shell
npx mocha tests
```

Assurez-vous que votre serveur est en cours d'exécution avant d'exécuter les tests.
