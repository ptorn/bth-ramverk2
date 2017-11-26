"use strict";

const WebSocket = require("ws");

/**
 * WebSocket Sercver
 * @param  {object} config Config object
 * @return {object}        Server object
 */
const wsServer = (config) => {
    const handleProtocols = (protocols /*, request */) => {
        console.log(`Incoming protocol requests '${protocols}'.`);
        for (var i=0; i < protocols.length; i++) {
            if (protocols[i] === "text") {
                return "text";
            } else if (protocols[i] === "json") {
                return "json";
            }
        }
        return false;
    };



    /**
     * WebSocket Object
     * @type {WebSocket}
     */
    const wss = new WebSocket.Server({
        server: config.server,
        clientTracking: true,
        handleProtocols: handleProtocols // Manage what subprotocol to use.
    });



    /**
     * Message handler
     * @param  {[type]} message message object transmitted
     * @param  {[type]} wss     WebSocket server
     * @param  {[type]} ws      WebSocket connection
     * @return {void}         [description]
     */
    const messageHandler = (message, wss, ws) => {
        config.handleMessage(message, wss, ws);
    };



    wss.on("connection", (ws /*, req*/) => {
        console.log("Connection received. Adding client.");
        // wss.broadcastExcept(ws, `New client connected (${wss.clients.size}).`);
        ws.isAlive = true;
        ws.on("pong", heartbeat);
        ws.on("message", (message) => {
            messageHandler(message, wss, ws);
        });
    });


    wss.broadcastClient = (ws, data) => {
        ws.send(data);
    };

    // Broadcast data to everyone except one self (ws).
    wss.broadcastExcept = (ws, data) => {
        let clients = 0;

        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                clients++;
                client.send(data);
            }
        });
        console.log(`Broadcasted data to ${clients} (${wss.clients.size}) clients.`);
    };

    wss.broadcastAll = (data) => {
        let clients = 0;

        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                clients++;
                client.send(data);
            }
        });
        console.log(`Broadcasted data to ${clients} (${wss.clients.size}) clients.`);
    };



    const heartbeat = () => {
        this.isAlive = true;
    };



    setInterval(function ping() {
        wss.clients.forEach(function each(ws) {
            if (ws.isAlive === false) {
                return ws.terminate();
            }
            ws.isAlive = false;
            ws.ping('', false, true);
        });
    }, 30000);
};

module.exports = wsServer;
