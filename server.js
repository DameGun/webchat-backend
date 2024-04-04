import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connect } from './config/db.js';
dotenv.config();

import auth from './routes/auth.router.js';

const app = express();

const corsOptions = {
    origin: 'http://localhost:8080'
};

app.use(express.json());
app.use(cors(corsOptions));

app.use('/', auth);

const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
    await connect();
    console.log(`Server listening on the port ${PORT}...`);
});