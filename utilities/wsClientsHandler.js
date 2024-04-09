class WsClientsHandler {
    constructor(wsServer) {
        this.wsServer = wsServer;
    }

    sendMessage(type, data) {
        this.wsServer.clients.forEach(client => client.send(JSON.stringify({
            type,
            data
        })))
    }
}

export default WsClientsHandler;