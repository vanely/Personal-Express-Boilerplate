import express, { Express, Request, Response } from 'express';

class Server {
    private app: Express;
    private port: number;

    constructor() {
        this.app = express();
        this.port = 3000;
        this.configureMiddlewares();
        this.configureRoutes();
    }

    private configureMiddlewares(): void {
        this.app.use(express.json());
        this.app.use(this.enableCors);
    }

    private configureRoutes(): void {
        this.app.get('/data', this.handleGetData);
        this.app.post('/data', this.handlePostData);
    }

    private enableCors(req: Request, res: Response, next: Function): void {
        // allowed cors urls can be passed into the contructor as part of modular server config(different server configs for different envs)
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        next();
    }

    private handleGetData(req: Request, res: Response): void {
        const data = { message: 'This is a sample response.' };
        res.json(data);
    }

    private handlePostData(req: Request, res: Response): void {
        const receivedData = req.body;
        res.json({ receivedData });
    }

    public start(): void {
        this.app.listen(this.port, () => {
            console.log(`Server is listening on port ${this.port}`);
        });
    }
}

export default Server;
