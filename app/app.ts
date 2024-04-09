// src/index.ts
import express, { Express, Request, Response } from 'express';
import cors from 'cors';

const app: Express = express();
app.use(cors());
const port = process.env.APP_PORT || 3030;

app.get('/', (req: Request, res: Response) => {
  res.send(JSON.stringif({ message: 'Hello World!' }));
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
