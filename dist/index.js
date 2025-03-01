"use strict";
// import WebSocket,{WebSocketServer} from "ws";
// import http from "http";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const server = http.createServer(function(req:any,res:any){
//     console.log((new Date()).toISOString()+' Recieved Request for '+req.url);
//     res.end("Hello World");
// });
// const wss = new WebSocketServer({server});
//     let userCOunt=0;
// wss.on("connection",function(ws:WebSocket){
//     //when there is some error in connection
//     ws.on('error',console.error);
//     //when there is some message websocketserver will send the data to all the connected server
//     ws.on('message', function(data: Buffer, isBinary: boolean) {
//         wss.clients.forEach(function each(client){
//             if(client.readyState == WebSocket.OPEN){
//                 client.send(data,{binary:isBinary});
//             }
//         })
//     });
//     //when user connects send this message
//     ws.send("hello Message From server")
//     console.log("User Connected "+ ++userCOunt);
// });
// server.listen(3000,function(){
//     console.log("Server is running on port 8080");
// })
// Express Server
const express_1 = __importDefault(require("express"));
const ws_1 = require("ws");
const app = (0, express_1.default)();
app.get("/", function (req, res) {
    res.send("Hello World");
});
let httpServer = app.listen(3000);
const wss = new ws_1.WebSocketServer({ server: httpServer });
let userCOunt = 0;
wss.on("connection", function (ws) {
    //when there is some error in connection
    ws.on('error', console.error);
    //when there is some message websocketserver will send the data to all the connected server
    ws.on('message', function (data, isBinary) {
        console.log("recieved message from client %s", data);
    });
    //when user connects send this message
    ws.send("hello Message From server");
    console.log("User Connected " + ++userCOunt);
});
