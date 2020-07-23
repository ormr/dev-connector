import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db';
import { auth } from './routes/api/auth';
import { profile } from './routes/api/profile';
import { post } from './routes/api/post';
import { users } from './routes/api/users';

const app = express();

// Connect Database
connectDB();


app.use(cors());
// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/auth', auth);
app.use('/api/profile', profile);
app.use('/api/post', post);
app.use('/api/users', users);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));

  /*
***
"build": "tsc -p tsconfig.json",
     "build:watch": "yarn build --watch",
     "start": "node dist/server.js",
     "start:watch":"nodemon dist/server.js --log",
     "client": "yarn --cwd ./client/src start",
     "server": "concurrently \"yarn build:watch\" \"yarn start:watch\"",
     "dev": "concurrently \"yarn server\" \"yarn client\""
***
*/