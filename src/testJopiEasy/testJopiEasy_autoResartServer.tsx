import {jopiApp} from "jopi-rewrite";
import WelcomeComponent from "./WelcomeComponent.tsx";

// We enable the auto-restart.
// It watches all our sources change and hard-restarts the app if a change is detected.
//
jopiApp.if_devMode(true /* <-- true allows setting dev mode from here */)
    // File watching is automatically enabled if dev mode.
    //.disable_restartServerOnSourceChange()

    // If using TypeScript compiler, then the source dir will be auto-detected.
    // Here it allows adding the workspace.
    //
    .add_directoryToWatch("../../../");

// Isolating our app allows keeping it minimal if watching is enabled.
// (it will also allow spawning the process in future versions).
//
jopiApp.startApp(jopiEasy => {
    jopiEasy.new_webSite("https://127.0.0.1:3000")
        .add_httpCertificate().generate_localDevCert().DONE_add_httpCertificate()
        .add_path("/")
        //.add_requiredRole("admin")
        .onGET(async req => {
            return req.reactResponse(<WelcomeComponent/>)
        })
        .DONE_add_path();
});
