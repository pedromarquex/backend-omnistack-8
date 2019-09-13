// área de imports
const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

// iniciando o router
const routes = express.Router();

// rotas sobre Devs
routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);

// rotas sobre Likes
routes.post('/devs/:devId/likes', LikeController.store);

// rotas sobre dislikes
routes.post('/devs/:devId/dislikes', DislikeController.store);

// exportando rotas
module.exports = routes;