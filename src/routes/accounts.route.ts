import { Router } from 'express'

import AccountsController from '../controllers/Accounts.controller'

const router = Router()

router.post('/', AccountsController.insertNewAccount)

export default router