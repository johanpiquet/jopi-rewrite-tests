import { jsx as _jsx } from "react/jsx-runtime";
import { jopiApp } from "jopi-rewrite";
import WelcomeComponent from "./WelcomeComponent.js";
jopiApp.startApp(jopiEasy => {
    jopiEasy.new_webSite("https://127.0.0.1:3000")
        .add_httpCertificate().generate_localDevCert().DONE_add_httpCertificate()
        .add_path("/")
        //.add_requiredRole("admin")
        .onGET(async (req) => {
        return req.reactResponse(_jsx(WelcomeComponent, {}));
    })
        .DONE_add_path();
});
//# sourceMappingURL=testJopiEasy_webSite.js.map