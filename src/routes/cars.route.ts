import { Router } from 'express'

import CarsController from '../controllers/Cars.controller'

const router = Router()

router.post('/', CarsController.insertNew)

export default router