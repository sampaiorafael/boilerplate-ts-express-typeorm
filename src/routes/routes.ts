import { Router } from 'express'

import cars from './cars.route'

const routes = Router()

routes.use('/cars', cars)

export default routes