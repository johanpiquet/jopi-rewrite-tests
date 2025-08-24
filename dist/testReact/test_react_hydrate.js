import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { JopiServer, newWebSite } from "jopi-rewrite";
import ComponentA from "./myHydrateComp/HydrateComponentA.js";
const server = new JopiServer();
const myWebSite = newWebSite("http://127.0.0.1");
server.addWebsite(myWebSite);
server.startServer();
myWebSite.onGET("/", async req => {
    if (req.urlInfos.pathname === "/favicon.ico") {
        return req.error404Response();
    }
    let cp = _jsx(ComponentA, { name: "jopi" });
    return req.reactResponse(cp);
});
//# sourceMappingURL=test_react_hydrate.js.map