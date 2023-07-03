// get controllers
import { Request, Response } from 'express';

export function handleGetData(req: Request, res: Response): void {
  const data = { message: 'This is a sample response.' };
  res.json(data);
}