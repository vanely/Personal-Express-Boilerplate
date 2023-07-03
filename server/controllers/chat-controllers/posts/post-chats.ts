// post controllers
import { Request, Response } from 'express';

export function handlePostData(req: Request, res: Response): void {
  const receivedData = req.body;
  res.json({ receivedData });
}
