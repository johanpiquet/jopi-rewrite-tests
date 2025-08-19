import {jopiEasy} from "jopi-rewrite";

jopiEasy.new_webSite("https://johan-piquet.fr")
    .add_httpCertificate().
        generate_letsEncryptCert("mymail@gmail.com")
        .disable_log()
        .force_timout_sec(5)
        .if_timeOutError(() => { console.log("Timed out !")})
        .done();
