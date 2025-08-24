import { JopiServer, newWebSite } from "jopi-rewrite";
//const url = "https://developer.mozilla.org"; const ip = "34.111.97.67";
export async function createServer(test, cache) {
    const server = new JopiServer();
    const myWebSite = newWebSite("http://127.0.0.1");
    server.addWebsite(myWebSite);
    server.startServer();
    myWebSite.onGET("/**", test);
}
//# sourceMappingURL=createServer.js.map