import express, { Application, Request, Response, NextFunction } from 'express';
import { connectDB } from './config/db';
import { auth } from './routes/api/auth';
import { profile } from './routes/api/profile';
import { post } from './routes/api/post';
import { users } from './routes/api/users';

const app: Application = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

app.get('/', (req: Request, res: Response, next: NextFunction) =>  {
  res.send('API Running');
});

// Define Routes
app.use('/api/auth', auth);
app.use('/api/profile', profile);
app.use('/api/post', post);
app.use('/api/users', users);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port http://localhost:${PORT}`)); 