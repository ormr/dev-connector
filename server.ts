import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

const add = (a: number, b: number): number => {
  return a + b;
}

app.get('/', (req: Request, res: Response, next: NextFunction) =>  {
  console.log(add(5, 5));
  res.send('API Running');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port http://localhost:${PORT}`)); 