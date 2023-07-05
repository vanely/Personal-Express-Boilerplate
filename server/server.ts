import express, { Express, Request, Response } from 'express';
import { chatRoutes } from './routes/base-routes';

class Server {
    private app: Express;
    private _port: number;

    constructor() {
        this.app = express();
        this.port = parseInt(process.env.SERVER_PORT) || 4000;
        this.configureMiddlewares();
        this.configureRoutes();
    }

    private get port(): number {
        return this._port;
    }

    private set port(portNumber: number) {
        this._port = portNumber;
    }

    // middleware
    private configureMiddlewares(): void {
        this.app.use(express.json());
        this.app.use(this.enableCors);
    }

    private enableCors(req: Request, res: Response, next: Function): void {
        // allowed cors urls can be passed into the contructor as part of modular server config(different server configs for different envs)
        res.setHeader('Access-Control-Allow-Origin', `${process.env.ALLOWED_ORIGIN}`); // allow server access from very specific origins(potentially template string based on different envs)
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // may need to explicitly allow application/json
        next();
    }

    // base routes
    private configureRoutes(): void {
        this.app.use('/chats', chatRoutes);
    }

    public appExport(): Express {
        return this.app;
    }

    public start(): void {
        this.app.listen(this.port, () => {
            console.log(`Server is listening on port ${this.port}`);
        });
    }
}

export default Server;
