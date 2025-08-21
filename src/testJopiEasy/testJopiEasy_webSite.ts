import {jopiEasy} from "jopi-rewrite";

jopiEasy.new_webSite("https://127.0.0.1")
    .add_httpCertificate().generate_localDevCert().DONE_add_httpCertificate()
    .add_path("/")
        .add_requiredRole("admin")
        .onGET(async req => req.htmlResponse("Hello !"))

