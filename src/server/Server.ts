import express from 'express';
import bodyParser from 'body-parser';
import { createConnection } from 'typeorm';

import routes from '../routes/routes'
import configs from '../configs/configs'

class Server {

    public express: express.Application;

    constructor() {
        this.express = express()
        this.configs()
        this.middlewares()
        this.routes()
        this.database()
    }

    private configs () {
        this.express.set('port', configs.Server.port)
    }

    private middlewares() {
        this.express.use(bodyParser.urlencoded({extended: true}))
    }

    private routes() {
        this.express.use(routes)
    }

    private async database () {
        return await createConnection()
    }

}

export default new Server().express;

