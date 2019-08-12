// área de imports
const express = require('express');

// iniciando o router
const routes = express.Router();

// rotas da aplicação
routes.get('/', (req, res) => {

    return res.json({ message: `Hello ${req.query.name}` });
});

routes.post('/devs', (req, res) => {
    return res.json(req.body);
});

// exportando rotas
module.exports = routes;