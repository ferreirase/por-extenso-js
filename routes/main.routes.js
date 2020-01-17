import Router from 'express';
import NumberController from '../app/controllers/porExtenso';
import Middleware from '../app/middlewares/middleware';

const routes = new Router();

//rota raiz
routes.get('/', (req, res) => {
  res.json('Server Docker is Running...');
});

routes.get('/:numero', Middleware, NumberController.convertePorExtenso);


export default routes;