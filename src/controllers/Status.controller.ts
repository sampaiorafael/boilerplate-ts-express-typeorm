import { RequestHandler, Request, Response, NextFunction } from 'express';
class StatusController {

    public async status (req: Request, res: Response, next: NextFunction): Promise<Response> {
        return res.status(200).json({
            status: "success",
            datetime: new Date(),
            requester: {
                ip: req.headers['x-forwarded-for'],
                ip2: req.connection.remoteAddress,
                ip3: req.socket.remoteAddress
            },
        })
    }

}

export default new StatusController()