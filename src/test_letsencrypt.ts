import {jopiEasy} from "jopi-rewrite";

jopiEasy.new_webSite("https://my-jopi-web-site.jopi")
    .add_httpCertificate().
        generate_letsEncryptCert("mymail@gmail.com")
        .disable_log()

        // TODO: remettre à 30
        .force_timout_sec(1)

        .if_timeOutError(webSite => {
                console.log("Timed out !")
                webSite._onRebuildCertificate!();
        })

        .done();
