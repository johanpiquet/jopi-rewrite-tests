import {jopiApp} from "jopi-rewrite";
import WebSocketClient from "./WebSocketClient.tsx";

jopiApp.startApp(import.meta, jopiEasy => {
    jopiEasy.create_creatWebSiteServer()
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