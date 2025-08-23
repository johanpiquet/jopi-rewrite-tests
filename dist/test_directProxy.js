import { createServer } from "./createServer.js";
await createServer(req => {
    return req.directProxyToServer();
});
//# sourceMappingURL=test_directProxy.js.map