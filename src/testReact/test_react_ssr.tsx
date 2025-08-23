import React from "react";

import MyButton from "./myHydrateComp/SsrButton.tsx";
import {JopiServer, newWebSite} from "jopi-rewrite";

const server = new JopiServer();
const myWebSite = newWebSite("http://127.0.0.1");

server.addWebsite(myWebSite);
server.startServer();

myWebSite.onGET("/", async req => {
    return req.reactResponse(<MyButton name="jopi" />);
});