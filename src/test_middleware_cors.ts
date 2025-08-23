import {JopiServer, newWebSite} from "jopi-rewrite";

const server = new JopiServer();
const myWebSite = server.addWebsite(newWebSite("http://127.0.0.1"));
server.startServer();

//highlight-next-line
myWebSite.enableCors();

myWebSite.onGET("/", async req => {
    return req.htmlResponse("My response");
});