const express = require('express');
const routes = require('./routes/main.routes');
const bodyParser = require('body-parser');

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

module.exports =  new App().server;