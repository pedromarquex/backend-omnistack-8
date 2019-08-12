// imports do projeto
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

// iniciando o server
const server = express();

// conectando ao banco de dados
mongoose.connect("mongodb+srv://admin:admin@cluster0-lkeol.mongodb.net/omnistack8?retryWrites=true&w=majority",
    { useNewUrlParser: true });

// passando configurações para o server
server.use(express.json());
server.use(routes);

// indicando ao server qual porta ouvir
server.listen(3333);