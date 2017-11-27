"use strict";

const wsServer = require("./wsServer");

let users = {
    type: "usersList",
    users: []
};



/**
 * Handle message
 * @param  {object} message Message object.
 * @param  {object} wss     WebSocket object.
 * @param  {object} ws      WebSocket connection object.
 * @return {void}
 */
function handleMessage(message, wss, ws) {
    console.log("Received: %s", message);
    let data = JSON.parse(message);

    switch (data.type) {
        case "createUser":
            createUser(data.user.nick);
            ws.nick = data.user.nick;
            broadcastAllJSON({
                type: "userList",
                users: users.users
            }, wss);
            // broadcastExceptJSON(users, wss, ws);
            broadcastClientJSON({
                type: "message",
                message: {
                    message: "Välkommen till Chatten " + data.user.nick,
                    nick: "",
                    time: Date.now()
                }
            }, wss, ws);
            broadcastExceptJSON({
                type: "message",
                message: {
                    message: data.user.nick + " har loggat in.",
                    nick: "",
                    time: Date.now()
                }
            }, wss, ws);
            break;
        case "message":
            broadcastAllJSON({
                type: "message",
                message: {
                    nick: data.nick,
                    message: data.message,
                    time: Date.now()
                }
            }, wss);
            break;
        default:
    }
}



/**
 * Handle error
 * @param  {string} error Error message
 * @return {void}
 */
function handleError(error) {
    console.log(`Server error: ${error}`);
}



/**
 * [handleClose description]
 * @param  {string} code   Error code
 * @param  {string} reason Error reason
 * @return {void}
 */
function handleClose(wss, ws) {
    users.users = users.users.filter((nick) => {
        return nick !== ws.nick;
    });

    broadcastExceptJSON({
        type: "message",
        message: {
            message: ws.nick + " har loggat ut.",
            nick: "",
            time: Date.now()
        }
    }, wss, ws);
    broadcastAllJSON({
        type: "userList",
        users: users.users
    }, wss);
    console.log("User %s has left the chat.", ws.nick);
}



/**
 * Create user
 * @param  {string} user username
 * @return {void}
 */
function createUser(user) {
    users.users.push(user);
    console.log("User %s is created", user);
}



/**
 * Broadcast to client as JSON
 * @param  {object} data Data object.
 * @param  {object} wss  WebSocket object.
 * @param  {object} ws   WebSocket connection object.
 * @return {void}
 */
function broadcastClientJSON(data, wss, ws) {
    wss.broadcastClient(ws, JSON.stringify(data));
}



/**
 * Broadcast to all as JSON
 * @param  {object} data Data object.
 * @param  {object} wss  WebSocket object.
 * @return {void}
 */
function broadcastAllJSON(data, wss) {
    wss.broadcastAll(JSON.stringify(data));
}



/**
 * Broadcast to all except sender.
 * @param  {object} data Data object.
 * @param  {object} wss  WebSocket object.
 * @param  {object} ws   WebSocket connection object.
 * @return {void}
 */
function broadcastExceptJSON(data, wss, ws) {
    wss.broadcastExcept(ws, JSON.stringify(data));
}



/**
 * ChatServer object
 * @param  {object} httpServer HttpServer object.
 * @return {object}            ChatServer object.
 */
const chatServer = (httpServer) => {
    return {
        // users: users,
        server: wsServer({
            server: httpServer,
            handleMessage: handleMessage,
            handleError: handleError,
            handleClose: handleClose
        }),
    };
};

module.exports = chatServer;
