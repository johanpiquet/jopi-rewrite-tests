import {jopiEasy} from "jopi-rewrite";

jopiEasy.new_fileServer("https://127.0.0.1")
    // --> Set information about the file server.
    .set_rootDir("www")
    .done()

    // --> Now set information about the website.

    .add_httpCertificate().generate_localDevCert().done()
    .hook_webSite(webSite => webSite.onGET("/version", req => req.jsonResponse({version: "1.0.0"})));