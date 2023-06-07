const express = require('express')
const pelisRouter = express.Router()
const pelisControllers = require('../controllers/pelisControllers')

pelisRouter.get('/film/:title', pelisControllers.getFilm)
pelisRouter.get('/', pelisControllers.getHome)
pelisRouter.post('/film/', pelisControllers.postHome)

module.exports = pelisRouter;