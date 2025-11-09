import {jopiApp} from "jopi-rewrite";
import WelcomeComponent from "./WelcomeComponent.tsx";

// Isolating our app allows registering start/stop listeners and actions.
//
jopiApp.startApp(import.meta, jopiEasy => {
    jopiEasy.create_creatWebSiteServer()
        .add_httpCertificate().generate_localDevCert().DONE_add_httpCertificate()
        .add_path("/")
        //.add_requiredRole("admin")
        .onGET(async req => {
            return req.reactResponse(<WelcomeComponent/>)
        })
        .DONE_add_path();
});