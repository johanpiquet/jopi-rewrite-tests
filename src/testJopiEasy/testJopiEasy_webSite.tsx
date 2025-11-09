import {jopiApp} from "jopi-rewrite";
import WelcomeComponent from "./WelcomeComponent.tsx";

jopiApp.startApp(import.meta, jopiEasy => {
    jopiEasy.use_webSite()
        .add_httpCertificate().generate_localDevCert().DONE_add_httpCertificate()
        .add_path("/")
        //.add_requiredRole("admin")
        .onGET(async req => {
            return req.reactResponse(<WelcomeComponent/>)
        })
        .DONE_add_path();

});