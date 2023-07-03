import { Express } from 'express';
import Server from './server';

const server = new Server();
server.start();

export function getAppInstance(): Express {
  return server.appExport();
}
