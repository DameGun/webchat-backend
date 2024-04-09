dotenv.config();
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connect } from './config/db.js';
import { WebSocketServer } from 'ws';
import { createServer } from 'http';

import auth from './routes/auth.router.js';
import messageController from './controllers/message.controller.js';
import WsClientsHandler from './utilities/wsClientsHandler.js';

const PORT = process.env.PORT || 8000;
const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });
const wsHandler = new WsClientsHandler(wss);

const corsOptions = {
    origin: 'http://localhost:8080'
};

app.use(express.json());
app.use(cors(corsOptions));

app.use('/', auth);
app.post('/messages', messageController.create(wsHandler));
app.patch('/messages/:id', messageController.update(wsHandler));
app.delete('/messages/:id', messageController.destroy(wsHadler));

wss.on('connection', (ws) => {
    console.log(`WebSocketServer listening on the port ${PORT}...`);

    ws.on('error', console.error);

    ws.on('message', async (msg) => {
        console.log('here');
        await messageController.findAll(wsHandler);
    })
})

server.listen(PORT, async () => {
    await connect();
    console.log(`Server listening on the port ${PORT}...`);
});