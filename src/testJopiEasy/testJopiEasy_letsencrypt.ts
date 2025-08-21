import {jopiEasy} from "jopi-rewrite";

// To know:
// - Certificat is automatically renewed (every 80 days).
// - With bun.js, HTTPS certificates can be updated without restarting the server.
// - Node.js doesn't support it :-(
//
jopiEasy.new_webSite("https://my-jopi-web-site.jopi")
    .add_httpCertificate().
        generate_letsEncryptCert("mymail@gmail.com")
        .disable_log()

        .force_timout_sec(30)
        .if_timeOutError(_webSite => { console.log("Timed out !") })

        .DONE_add_httpCertificate();
