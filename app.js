import express from 'express';
import routes from './routes/main.routes';
import bodyParser from 'body-parser';

class App{
  constructor(){
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.server.use(express.json());
    this.server.use(bodyParser.urlencoded({ extended: false }));
  }

  routes(){
    this.server.use(routes);
  }
}

export default new App().server;