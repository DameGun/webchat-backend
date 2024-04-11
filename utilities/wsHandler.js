import { WebSocketServer } from 'ws';
import messageController from '../controllers/message.controller.js';

class WsHandler {
    constructor(server) {
        this.wsServer = new WebSocketServer({ server });
        console.log(`WebSocketServer listening...`);
    }

    connect() {
        this.wsServer.on('connection', (client) => {
            console.log('Client connected to WebSocketServer!');
            
            client.on('error', console.error);
        
            client.on('message', async (msg) => {
                await messageController.findAll(this);
            })

            client.on('close', (msg) => {
                console.log('Client disconnected!');
            })
        })
    }

    sendMessage(type, data) {
        this.wsServer.clients.forEach(client => client.send(JSON.stringify({
            message: {
                type,
                data
            }
        })))
    }
}

export default WsHandler;