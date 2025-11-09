import {jopiApp} from "jopi-rewrite";

jopiApp.startApp(import.meta, jopiEasy => {
    jopiEasy.use_webSite(`https://mysite:3000`)
        .add_httpCertificate()
            .generate_letsEncryptCert("myemail@me.com")
            .force_expireAfter_days(30) // Optional
            .enable_production(true) // Optional
            .disable_log() // Optional
            .DONE_add_httpCertificate();
});