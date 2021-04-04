import { RequestHandler, Request, Response, NextFunction } from 'express';
import { uptime, hostname } from 'os'
class StatusController {

    public async status (req: Request, res: Response, next: NextFunction): Promise<Response> {
        return res.status(200).json({
            status: "success",
            datetime: new Date(),
            requester: {
                ip: req.headers['x-forwarded-for'],
                socket: req.socket.remoteAddress
            },
            uptime: (uptime() / 60) / 60,
        })
    }

}

export default new StatusController()