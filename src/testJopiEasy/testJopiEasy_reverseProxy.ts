import {jopiApp} from "jopi-rewrite";

jopiApp.startApp(import.meta, jopiEasy => {
    jopiEasy
        .create_reverseProxyServer("https://my-jopi-web-site.jopi:8890")
            .add_target()
                .useIp("http://my-jopi-web-site.jopi:8891", "127.0.0.1")
                .DONE_add_target()
        .DONE_new_reverseProxy()

        .add_httpCertificate()
            .generate_localDevCert()
            .DONE_add_httpCertificate()

        .DONE_createWebSite()
});