const express = require('express');

const routes = express.Router(); // Desacoplando módulo de rotas do expresss

//Controllers <==
const TweetController = require('./Controllers/TweetController');
const LikeController = require('./Controllers/LikeController');

//ROTAS <==
routes.get('/tweet' , TweetController.list);
routes.post('/tweet' , TweetController.create);

routes.post('/likes/:id' , LikeController.create);

module.exports = routes;