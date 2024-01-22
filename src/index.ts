import express, { type Express, type Request, type Response } from 'express';
import 'dotenv/config';

const app: Express = express();
const port = process?.env?.PORT != null || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/test', (req: Request, res: Response) => {
  console.log(process.env.TG_TOKEN);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
