import { Router } from 'express'

import status from './status.route'
import accounts from './accounts.route'

const routes = Router()

routes.use('/status', status)
routes.use('/accounts', accounts)

export default routes