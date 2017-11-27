// const mocha = require('mocha');
// const describe = mocha.describe;
// const it = mocha.it;
// const assert = require('assert');
// //
// const http = require("http");
// const chatServer = require("../../src/chat/chatServer");
// const WebSocket = require("ws");
// //
// const port = 3003;
// const server = http.createServer();
//
// server.listen(port);
// chatServer(server);
//
// const Server = require('mock-socket').Server;
//
// function Chat() {
//     const chatSocket = new WebSocket('ws://localhost:3003');
//
//     this.messages = [];
//
//     chatSocket.onmessage = (event) => {
//         this.messages.push(event.data);
//     };
// }
// describe('Chat Unit Test', () => {
//     it('basic test', (done) => {
//         const mockServer = new Server('ws://localhost:3003');
//         const ws = new WebSocket('ws://localhost:3003');
//
//         mockServer.on('connection', server => {
//             mockServer.send('test message 1');
//             mockServer.send('test message 2');
//         });
//
//         // Now when Chat tries to do new WebSocket() it
//         // will create a MockWebSocket object \
//         var chatApp = new Chat();
//
//         setTimeout(() => {
//             const messageLen = chatApp.messages.length;
//
//             ws.on("message", (data) => {
//                 let dataObj = JSON.parse(data);
//
//                 if (dataObj.type === "createUser") {
//                     assert.equal(dataObj.user.nick, "test");
//                 }
//             });
//             assert.equal(messageLen, 2, '2 messages where sent from the s server');
//
//             mockServer.stop(done);
//         }, 100);
//     });
// });
