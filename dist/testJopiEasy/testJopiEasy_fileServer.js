import { jopiApp } from "jopi-rewrite";
jopiApp.startApp(jopiEasy => {
    jopiEasy.new_fileServer("https://127.0.0.1")
        // --> Set information about the file server.
        .set_rootDir("www")
        .DONE_new_fileServer()
        // --> Now set information about the website.
        .add_httpCertificate().generate_localDevCert().DONE_add_httpCertificate()
        .hook_webSite(webSite => webSite.onGET("/version", async (req) => req.jsonResponse({ version: "1.0.0" })));
});
//# sourceMappingURL=testJopiEasy_fileServer.js.map