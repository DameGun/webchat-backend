dotenv.config();
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connect } from './config/db.js';
import { createServer } from 'http';

import auth from './routes/auth.router.js';
import messages from './routes/message.router.js';
import WsHandler from './utilities/wsHandler.js';

const PORT = process.env.PORT || 8000;
const app = express();
const server = createServer(app);
const wsHandler = new WsHandler(server);

const corsOptions = {
    origin: 'http://localhost:8080'
};

app.use(express.json());
app.use(cors(corsOptions));

app.use('/', auth);
app.use('/messages', messages(wsHandler));

wsHandler.connect();

server.listen(PORT, async () => {
    await connect();
    console.log(`Server listening on the port ${PORT}...`);
});