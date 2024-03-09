import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import responsesRouter from './routes/responsesRoutes';

dotenv.config();

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Fillout test API success.');
});

app.use('/api', responsesRouter);

export default app;
