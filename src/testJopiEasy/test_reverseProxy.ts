import {jopiEasy} from "jopi-rewrite";

jopiEasy
    .new_reverseProxy("https://my-jopi-web-site.jopi:8890")
        .add_httpCertificate().generate_localDevCert().done()
        .add_target("http://my-jopi-web-site.jopi:8891").useIp("127.0.0.1").done()

        // TODO: set_isBackupServer has no effect.
        //.add_target("http://my-jopi-web-site.jopi:8892").set_isBackupServer().done();
