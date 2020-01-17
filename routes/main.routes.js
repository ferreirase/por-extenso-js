const Router = require('express');
const NumberController = require('../app/controllers/porExtenso');
const Middleware = require('../app/middlewares/middleware');

const routes = new Router();

//rota raiz
routes.get('/', (req, res) => {
  res.json('Server Docker is Running...');
});

routes.get('/:numero', Middleware, NumberController.convertePorExtenso);


module.exports =  routes;