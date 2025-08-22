import {jopiApp} from "jopi-rewrite";
import {UserStore_WithLoginPassword} from "jopi-rewrite/dist/userStores";

jopiApp.startApp(jopiEasy => {
    let userStore: UserStore_WithLoginPassword;

    jopiEasy.new_webSite("https://127.0.0.1")
        .add_httpCertificate().generate_localDevCert().DONE_add_httpCertificate()

        .add_jwtTokenAuth()
        .step_setPrivateKey("my key")
        .step_setUserStore()
        .use_customStore(_loginInfo => ({isOk: false, errorMessage: "Unknown user"}))
        .DONE_use_customStore()
        .stepOptional_setTokenStore().use_cookie()
        .DONE_add_jwtTokenAuth();
});