import {jopiEasy} from "jopi-rewrite";

jopiEasy.new_webSite("https://127.0.0.1")
    .add_httpCertificate().forLocalDev().done()
    .add_fileServer("www").done().

    hook_webSite(webSite => {
        webSite.onGET("/version", req => {
            return req.jsonResponse({version: "1.0.0"});
        });
    });


