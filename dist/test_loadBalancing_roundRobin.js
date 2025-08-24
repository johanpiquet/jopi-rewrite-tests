import { JopiServer, newWebSite, ServerFetch } from "jopi-rewrite";
const targetUrl = "https://developer.mozilla.org";
const server = new JopiServer();
const sslCertificate = await server.createDevCertificate(new URL(targetUrl).hostname);
const myWebSite = newWebSite(targetUrl, { certificate: sslCertificate });
function buildServer(offset) {
    return ServerFetch.useOrigin("https://34.111.97.67", "developer.mozilla.org", {
        beforeRequesting(url) { console.log("Using server", offset, "for url", url); }
    });
}
function buildKoServer(offset) {
    return ServerFetch.useOrigin("http://donexist_111ddndkdhd", undefined, {
        beforeRequesting(url) {
            console.log("Using ko server", offset, "for url", url);
        },
        ifServerIsDown() {
            console.log("Server is ko:", "donexist_111ddndkdhd");
            // Return nothing, or the replacement server.
            return Promise.resolve({
                newServer: buildServer(offset),
                newServerWeight: 1 // Optional
            });
        }
    });
}
myWebSite.addSourceServer(buildKoServer(1), 1);
server.addWebsite(myWebSite);
server.startServer();
myWebSite.onGET("/**", req => {
    return req.directProxyToServer();
});
//# sourceMappingURL=test_loadBalancing_roundRobin.js.map