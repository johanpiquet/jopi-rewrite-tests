import {JopiServer, WebSite, getLetsEncryptCertificate} from "jopi-rewrite";

const server = new JopiServer();

const myHttpsWebSite = server.addWebsite(new WebSite("https://johan-piquet.fr"));

// ACME challenge requires port 80 of the server.
const myHttpWebSite = myHttpsWebSite.createHttpRedirectWebsite();
server.addWebsite(myHttpWebSite);

server.startServer();

try {
    let certificate = await getLetsEncryptCertificate(myHttpWebSite, {
        log: true,

        email: "mymail@gmail.com",

        // When not in production, it doesn't check the server.
        isProduction: false,

        timout_sec: 5
    });

    console.log("Certificate installed");
}
catch (e) {
    console.error("Can't install certificat", e);
}