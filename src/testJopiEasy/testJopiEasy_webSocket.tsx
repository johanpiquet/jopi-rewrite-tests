import {jopiApp} from "jopi-rewrite";
import WebSocketClient from "./WebSocketClient.tsx";

jopiApp.startApp(jopiEasy => {
    jopiEasy.new_webSite("http://127.0.0.1:3000")
        .add_path("/").onGET(async req => req.reactResponse(<WebSocketClient/>))
        .add_path("/test").onWebSocketConnect((ws, infos) => {
        console.log("Connected to WebSocket Client !!!!!");

        ws.onMessage(msg => {
            console.log("Message received: ", msg);
            ws.sendMessage("ok");
        })
    })
        .DONE_add_path();
});