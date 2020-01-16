const {Router} = require('express')
const DevController = require('./controllers/DevController')
const SearchDevsController = require('./controllers/SearchDevsController')

const routes = Router();

/*
  tipos de parametros
  query params: reques.query (filtros, ordenação, paginação)
  Route params: request.params(identificar um recurso na altraçao ou remoção)
  Body: request.body (dados para criação ou alteração de um registro)
*/

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)

routes.get('/search', SearchDevsController.index)
module.exports = routes;
