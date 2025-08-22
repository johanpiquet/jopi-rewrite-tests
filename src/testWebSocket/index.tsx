import {jopiEasy} from "jopi-rewrite";
import WebSocketClient from "./WebSocketClient.tsx";

jopiEasy.new_webSite("http://127.0.0.1:3000")
    .add_path("/").onGET(async req => req.reactResponse(<WebSocketClient />))
    .DONE_add_path()

    .hook_webSite(webSite => {
        webSite.onWebSocketConnect("/test", async (ws, infos) => {
            console.log("Connected to WebSocket Client !!!!!");

            ws.onMessage(msg => {
                console.log("Message received: ", msg);
                ws.sendMessage("ok");
            })
        })
    })
