import {createServer} from "./createServer.ts";

await createServer(req => {
    return req.directProxyToServer();
})