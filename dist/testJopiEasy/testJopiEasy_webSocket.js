import { jsx as _jsx } from "react/jsx-runtime";
import { jopiApp } from "jopi-rewrite";
import WebSocketClient from "./WebSocketClient.js";
jopiApp.startApp(jopiEasy => {
    jopiEasy.new_webSite("http://127.0.0.1:3000")
        .add_path("/").onGET(async req => req.reactResponse(_jsx(WebSocketClient, {})))
        .add_path("/test").onWebSocketConnect((ws, infos) => {
        console.log("Connected to WebSocket Client !!!!!");
        ws.onMessage(msg => {
            console.log("Message received: ", msg);
            ws.sendMessage("ok");
        });
    })
        .DONE_add_path();
});
//# sourceMappingURL=testJopiEasy_webSocket.js.map